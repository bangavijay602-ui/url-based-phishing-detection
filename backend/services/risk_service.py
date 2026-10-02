"""
Risk Scoring and Classification Service.
Thresholds are dynamically loaded from validation-calibrated config.
"""

from typing import Tuple, Dict, Any


def evaluate_risk(
    p_phishing: float,
    threshold_low: float = 0.35,
    threshold_high: float = 0.70,
    decision_threshold: float = 0.50
) -> Dict[str, Any]:
    """
    Computes risk score, risk level, and classification based on calibrated thresholds.

    - Low Risk: p_phishing < threshold_low ("Low Risk / Likely Legitimate")
    - Medium Risk: threshold_low <= p_phishing < threshold_high ("Medium Risk / Suspicious")
    - High Risk: p_phishing >= threshold_high ("High Risk / Likely Phishing")
    """
    p_phishing = max(0.0, min(1.0, float(p_phishing)))
    risk_score = int(round(p_phishing * 100))

    if p_phishing < threshold_low:
        risk_level = "Low"
        risk_description = "Low Risk / Likely Legitimate"
    elif p_phishing < threshold_high:
        risk_level = "Medium"
        risk_description = "Medium Risk / Suspicious"
    else:
        risk_level = "High"
        risk_description = "High Risk / Likely Phishing"

    # Prediction decision
    if p_phishing >= decision_threshold:
        prediction = "Phishing"
        probability = round(p_phishing, 4)
    else:
        prediction = "Legitimate"
        probability = round(1.0 - p_phishing, 4)

    return {
        "prediction": prediction,
        "probability": probability,
        "risk_level": risk_level,
        "risk_score": risk_score,
        "risk_description": risk_description
    }
