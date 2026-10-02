"""
Unit Tests for Prediction Service and Risk Scoring.
"""

import pytest
from backend.services.prediction_service import prediction_service
from backend.services.risk_service import evaluate_risk
from backend.database.crud import get_prediction_history


def test_evaluate_risk_thresholds():
    """Verify calibrated risk evaluation and prompt-compliant risk levels."""
    # Test low risk
    low = evaluate_risk(0.10, threshold_low=0.30, threshold_high=0.70)
    assert low["risk_level"] == "Low"
    assert low["risk_score"] == 10
    assert low["prediction"] == "Legitimate"
    assert low["probability"] == 0.90
    assert "Likely Legitimate" in low["risk_description"]

    # Test medium risk
    med = evaluate_risk(0.55, threshold_low=0.30, threshold_high=0.70)
    assert med["risk_level"] == "Medium"
    assert med["risk_score"] == 55
    assert med["prediction"] == "Phishing"
    assert "Suspicious" in med["risk_description"]

    # Test high risk - MUST NOT be named 'Confirmed Phishing'
    high = evaluate_risk(0.88, threshold_low=0.30, threshold_high=0.70)
    assert high["risk_level"] == "High"
    assert high["risk_score"] == 88
    assert high["prediction"] == "Phishing"
    assert "Confirmed Phishing" not in high["risk_description"]
    assert "Likely Phishing" in high["risk_description"]


def test_predict_legitimate_url():
    """Verify prediction structure for a benign URL."""
    url = "https://www.google.com/search?q=cybersecurity"
    result = prediction_service.predict_url(url)

    assert result["url"] == url
    assert result["prediction"] in ("Legitimate", "Phishing")
    assert 0.0 <= result["probability"] <= 1.0
    assert result["risk_level"] in ("Low", "Medium", "High")
    assert 0 <= result["risk_score"] <= 100
    assert isinstance(result["reasons"], list)
    assert result["model_version"] != ""
    assert result["processing_time_ms"] >= 0.0


def test_predict_phishing_url():
    """Verify prediction and detection reasons on a high-risk URL."""
    phish_url = "http://192.168.1.1/secure-login-verify-account-update/banking/auth.php"
    result = prediction_service.predict_url(phish_url)

    assert result["prediction"] == "Phishing"
    assert result["risk_level"] in ("Medium", "High")
    assert result["risk_score"] >= 50
    assert len(result["reasons"]) > 0

    # Ensure explanatory reasons reflect actual features
    reasons_text = " ".join(result["reasons"]).lower()
    assert "http" in reasons_text or "ip address" in reasons_text or "keyword" in reasons_text


def test_predict_with_database_persistence(db_session):
    """Verify that predictions are recorded to the database when a session is provided."""
    url = "https://www.wikipedia.org"
    result = prediction_service.predict_url(url, db=db_session)

    assert result["id"] is not None
    # Check that record exists in database
    history = get_prediction_history(db_session, limit=1)
    assert len(history) >= 1
    assert history[0].url == url
    assert history[0].id == result["id"]
