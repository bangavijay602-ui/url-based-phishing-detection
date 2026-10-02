"""
Model Evaluation Module.
Computes comprehensive classification metrics with particular focus on
Phishing Recall, Phishing Precision, False Negatives, and ROC-AUC.
"""

from typing import Dict, Any, Tuple
import numpy as np
import pandas as pd
from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    roc_auc_score,
    confusion_matrix,
    classification_report
)


def evaluate_model(
    model,
    X_test,
    y_test,
    model_name: str = "Model",
    decision_threshold: float = 0.50
) -> Tuple[Dict[str, Any], str]:
    """
    Evaluates a trained classifier on test or validation data.
    Returns:
    - metrics_dict
    - formatted classification report string
    """
    # Check if model supports predict_proba
    if hasattr(model, "predict_proba"):
        y_prob = model.predict_proba(X_test)[:, 1]
        y_pred = (y_prob >= decision_threshold).astype(int)
        roc_auc = float(roc_auc_score(y_test, y_prob))
    else:
        y_pred = model.predict(X_test)
        y_prob = y_pred
        roc_auc = 0.0

    acc = float(accuracy_score(y_test, y_pred))
    prec_phish = float(precision_score(y_test, y_pred, pos_label=1, zero_division=0))
    rec_phish = float(recall_score(y_test, y_pred, pos_label=1, zero_division=0))
    f1_phish = float(f1_score(y_test, y_pred, pos_label=1, zero_division=0))

    prec_legit = float(precision_score(y_test, y_pred, pos_label=0, zero_division=0))
    rec_legit = float(recall_score(y_test, y_pred, pos_label=0, zero_division=0))
    f1_legit = float(f1_score(y_test, y_pred, pos_label=0, zero_division=0))

    cm = confusion_matrix(y_test, y_pred)
    tn, fp, fn, tp = cm.ravel()

    report_str = classification_report(
        y_test,
        y_pred,
        target_names=["Legitimate (0)", "Phishing (1)"],
        digits=4
    )

    metrics = {
        "model_name": model_name,
        "accuracy": acc,
        "phishing_precision": prec_phish,
        "phishing_recall": rec_phish,
        "phishing_f1": f1_phish,
        "legitimate_precision": prec_legit,
        "legitimate_recall": rec_legit,
        "legitimate_f1": f1_legit,
        "roc_auc": roc_auc,
        "true_negatives": int(tn),
        "false_positives": int(fp),
        "false_negatives": int(fn),
        "true_positives": int(tp),
        "decision_threshold": decision_threshold
    }

    return metrics, report_str
