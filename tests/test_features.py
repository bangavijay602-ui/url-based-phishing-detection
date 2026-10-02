"""
Unit Tests for URL Feature Extraction.
Verifies accuracy, edge case handling, and consistency across URL profiles.
"""

import pytest
from ml.src.feature_extractor import (
    extract_features,
    validate_url,
    normalize_url,
    calc_entropy,
    char_continuation_rate,
    FEATURE_NAMES,
    SUSPICIOUS_KEYWORDS,
    SHORTENERS
)


def test_feature_names_completeness():
    """Verify that all 33 features are documented and defined."""
    assert len(FEATURE_NAMES) == 33
    features = extract_features("https://example.com")
    for fname in FEATURE_NAMES:
        assert fname in features, f"Missing feature in output: {fname}"
        assert isinstance(features[fname], (int, float))


def test_legitimate_url_features():
    """Verify extraction on standard HTTPS benign URL."""
    url = "https://www.example.com/about"
    feats = extract_features(url)

    assert feats["is_https"] == 1
    assert feats["is_ip_domain"] == 0
    assert feats["is_shortened"] == 0
    assert feats["num_dots"] == 2
    assert feats["domain_length"] == len("www.example.com")
    assert feats["tld_length"] == 3
    assert feats["suspicious_keyword_count"] == 0


def test_ip_based_url():
    """Verify detection of IPv4 hostnames."""
    url = "http://192.168.1.100/admin/login"
    feats = extract_features(url)

    assert feats["is_ip_domain"] == 1
    assert feats["is_https"] == 0
    assert feats["suspicious_keyword_count"] >= 1  # 'login'
    assert feats["num_dots"] == 3


def test_url_shortener_detection():
    """Verify detection of shortened URLs."""
    url = "https://bit.ly/secure-link"
    feats = extract_features(url)

    assert feats["is_shortened"] == 1
    assert feats["suspicious_keyword_count"] >= 1  # 'secure'


def test_obfuscation_and_percent_encoding():
    """Verify detection of percent-encoding and hex escapes."""
    url = "http://test.com/%20%2F%3Dlogin"
    feats = extract_features(url)

    assert feats["has_obfuscation"] == 1
    assert feats["num_percent_signs"] == 3
    assert feats["suspicious_keyword_count"] >= 1


def test_punycode_and_consecutive_hyphens():
    """Verify homograph punycode and consecutive hyphens."""
    url = "https://xn--appl-43d.com/path--login"
    feats = extract_features(url)

    assert feats["has_punycode"] == 1
    assert feats["consecutive_hyphens"] == 1


def test_query_params_and_special_chars():
    """Verify query string parsing and special character counting."""
    url = "https://example.org/search?q=test&lang=en&token=xyz123"
    feats = extract_features(url)

    assert feats["num_query_params"] == 3
    assert feats["num_question_marks"] == 1
    assert feats["num_ampersands"] == 2
    assert feats["num_equal_signs"] == 3


def test_entropy_calculation():
    """Verify Shannon entropy calculation."""
    # Repetitive string should have low entropy
    low_ent = calc_entropy("aaaaaaaaaa")
    assert low_ent == 0.0

    # High randomness should have higher entropy
    high_ent = calc_entropy("a1!b2@c3#d4$")
    assert high_ent > 3.0


def test_continuation_rate():
    """Verify continuation rate calculation."""
    rate = char_continuation_rate("aaaaabbbbb")
    assert 0.0 < rate <= 1.0
    assert char_continuation_rate("") == 0.0


def test_url_validation():
    """Verify URL validation for valid and invalid inputs."""
    assert validate_url("https://example.com")[0] is True
    assert validate_url("http://sub.domain.co.uk/path")[0] is True
    assert validate_url("")[0] is False
    assert validate_url("   ")[0] is False
    assert validate_url("a" * 2500)[0] is False  # Exceeds max length
    assert validate_url("http://example.com/\x00test")[0] is False  # Control char
