"""
Model Explainability Module.
Generates deterministic, feature-grounded explanations for predictions
based on extracted URL features, model feature importances, and security heuristics.
"""

from typing import Dict, List, Any
from ml.src.feature_extractor import SUSPICIOUS_KEYWORDS, SHORTENERS


def explain_prediction(
    features: Dict[str, Any],
    prediction: str,
    probability: float,
    risk_level: str
) -> List[str]:
    """
    Generates human-readable, technically accurate reasons grounded in actual feature values.
    For Legitimate / Low Risk URLs, returns an empty list as per project specification.
    For Phishing / Medium / High Risk URLs, details the specific anomalies detected.
    """
    if prediction == "Legitimate" and risk_level == "Low":
        return []

    reasons: List[str] = []

    # 1. Scheme security
    if features.get('is_https') == 0:
        reasons.append("HTTP instead of HTTPS (Unencrypted transmission)")

    # 2. IP Hostname
    if features.get('is_ip_domain') == 1:
        reasons.append("IP address used as hostname instead of a registered domain")

    # 3. URL Length anomalies
    url_len = features.get('url_length', 0)
    if url_len > 75:
        reasons.append(f"Unusually long URL ({url_len} characters)")

    # 4. Domain Length anomalies
    domain_len = features.get('domain_length', 0)
    if domain_len > 30:
        reasons.append(f"Abnormally long domain name ({domain_len} characters)")

    # 5. Subdomain count
    subdomains = features.get('num_subdomains', 0)
    if subdomains >= 2:
        reasons.append(f"Excessive subdomain nesting ({subdomains} subdomains)")

    # 6. Suspicious Keywords
    kw_count = features.get('suspicious_keyword_count', 0)
    if kw_count > 0:
        reasons.append(f"Suspicious security/credential keywords detected ({kw_count} keyword matches)")

    # 7. URL Shortening
    if features.get('is_shortened') == 1:
        reasons.append("Known URL shortening service obscures the true destination")

    # 8. Special Characters & Delimiters
    dots = features.get('num_dots', 0)
    if dots >= 4:
        reasons.append(f"High number of dot delimiters in URL ({dots} dots)")

    hyphens = features.get('num_hyphens', 0)
    if hyphens >= 3:
        reasons.append(f"High frequency of hyphens often used in domain spoofing ({hyphens} hyphens)")

    if features.get('consecutive_hyphens') == 1:
        reasons.append("Consecutive hyphens ('--') detected in URL structure")

    at_syms = features.get('num_at_symbols', 0)
    if at_syms > 0:
        reasons.append("Contains '@' symbol indicating userinfo credential injection or spoofing")

    # 9. Hex / Obfuscation
    if features.get('has_obfuscation') == 1 or features.get('num_percent_signs', 0) > 0:
        reasons.append("Character encoding / percent-obfuscation detected in URL")

    # 10. Punycode / IDN
    if features.get('has_punycode') == 1:
        reasons.append("Punycode ('xn--') detected indicating potential IDN homograph spoofing")

    # 11. High Entropy
    entropy = features.get('entropy', 0.0)
    if entropy >= 4.2:
        reasons.append(f"High character randomness / entropy ({entropy:.2f} bits) typical of algorithmically generated domains")

    # 12. Digit ratio
    digit_ratio = features.get('digit_ratio', 0.0)
    if digit_ratio > 0.25:
        reasons.append(f"Unusually high proportion of numeric digits ({digit_ratio*100:.1f}% of URL)")

    # 13. Deep Directory Structure
    path_dirs = features.get('num_path_dirs', 0)
    if path_dirs >= 4:
        reasons.append(f"Deeply nested URL path ({path_dirs} directory levels)")

    # Fallback if no specific rule triggered but model classified as Phishing/Suspicious
    if not reasons and (prediction == "Phishing" or risk_level in ("Medium", "High")):
        reasons.append("Suspicious lexical and statistical URL structure")

    return reasons
