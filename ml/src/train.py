"""
Model Training and Evaluation Pipeline.
Implements:
1. Strict Conflicting-Label Verification and Deduplication
2. Single-source-of-truth Feature Extraction
3. Stratified Train / Validation / Test Partitioning (70% / 15% / 15%)
4. Training & Comparison: Logistic Regression, Random Forest, XGBoost
5. Validation-driven Threshold Tuning & Calibration
6. Final Unbiased Evaluation on the Untouched Test Set
7. Serialization of Model, Config, and Metrics Reports
"""

import os
import sys
import time
import json
import logging
from typing import Dict, Any, Tuple
import numpy as np
import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from xgboost import XGBClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.metrics import precision_recall_curve

# Add project root to sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")))

from ml.src.data_loader import load_and_clean_dataset
from ml.src.feature_extractor import FEATURE_NAMES, extract_features
from ml.src.evaluate import evaluate_model

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s"
)
logger = logging.getLogger("ml_train")


def extract_features_dataset(df: pd.DataFrame) -> pd.DataFrame:
    """
    Extracts features for all URLs in dataframe using the single source of truth.
    """
    logger.info(f"Extracting features for {len(df):,} URLs using ml.src.feature_extractor...")
    t0 = time.time()
    feature_records = [extract_features(u) for u in df["URL"]]
    feat_df = pd.DataFrame(feature_records)[FEATURE_NAMES]
    elapsed = time.time() - t0
    logger.info(f"Feature extraction completed in {elapsed:.2f}s ({len(df)/elapsed:.1f} URLs/sec).")
    return feat_df


def determine_validation_thresholds(
    model,
    X_val: pd.DataFrame,
    y_val: np.ndarray
) -> Tuple[float, float, float, Dict[str, Any]]:
    """
    Determines decision, low-risk, and high-risk thresholds empirically
    using the validation set.
    """
    logger.info("Calibrating risk thresholds on the Validation set...")
    val_probs = model.predict_proba(X_val)[:, 1]

    # Evaluate thresholds from 0.05 to 0.95 to find optimal decision threshold for F1
    best_f1 = -1.0
    best_thresh = 0.50
    precisions, recalls, thresholds = precision_recall_curve(y_val, val_probs)

    for p, r, t in zip(precisions[:-1], recalls[:-1], thresholds):
        if (p + r) > 0:
            f1 = 2 * (p * r) / (p + r)
            if f1 > best_f1:
                best_f1 = f1
                best_thresh = float(t)

    # Determine threshold_low: upper boundary for Low Risk
    # We want false positives (legitimate flagged as high risk) minimized.
    # Below threshold_low, phishing probability is very low (e.g. 98%+ legitimate).
    candidate_lows = [t for t in thresholds if t <= 0.40]
    thresh_low = round(float(np.percentile(candidate_lows, 25)) if candidate_lows else 0.30, 2)
    thresh_low = max(0.15, min(thresh_low, 0.40))

    # Determine threshold_high: lower boundary for High Risk / Likely Phishing
    # Above threshold_high, phishing precision is very high (e.g. >= 95%).
    high_candidates = [t for t, p in zip(thresholds, precisions[:-1]) if p >= 0.95 and t >= 0.60]
    thresh_high = round(float(min(high_candidates)) if high_candidates else 0.70, 2)
    thresh_high = max(0.60, min(thresh_high, 0.85))

    decision_threshold = round(best_thresh, 2)

    logger.info(
        f"Empirically calibrated thresholds: Decision={decision_threshold:.2f}, "
        f"Low Risk boundary={thresh_low:.2f}, High Risk boundary={thresh_high:.2f}"
    )

    threshold_info = {
        "decision_threshold": decision_threshold,
        "threshold_low": thresh_low,
        "threshold_high": thresh_high,
        "val_best_f1": float(best_f1)
    }

    return thresh_low, thresh_high, decision_threshold, threshold_info


def run_training_pipeline(
    data_path: str,
    output_dir: str = "ml"
) -> Dict[str, Any]:
    """
    Main training execution function.
    """
    models_dir = os.path.join(output_dir, "models")
    reports_dir = os.path.join(output_dir, "reports")
    os.makedirs(models_dir, exist_ok=True)
    os.makedirs(reports_dir, exist_ok=True)

    # 1. Load, verify conflicts, and clean
    df, meta = load_and_clean_dataset(data_path)
    
    # 2. Extract features using single source of truth
    X = extract_features_dataset(df)
    y = df["is_phishing"].values

    # 3. Stratified Partitioning: 70% Train, 15% Val, 15% Test
    logger.info("Partitioning dataset into 70% Train, 15% Validation, 15% Test (Stratified, seed=42)...")
    X_train, X_temp, y_train, y_temp = train_test_split(
        X, y, test_size=0.30, random_state=42, stratify=y
    )
    # Split temp (30%) equally into Val (15%) and Test (15%)
    X_val, X_test, y_val, y_test = train_test_split(
        X_temp, y_temp, test_size=0.50, random_state=42, stratify=y_temp
    )

    logger.info(f"Split sizes: Train={len(X_train):,}, Validation={len(X_val):,}, Test={len(X_test):,}")
    logger.info("Test set is isolated and kept completely untouched during model selection and tuning.")

    # 4. Define candidate models
    models = {
        "Logistic Regression": Pipeline([
            ("scaler", StandardScaler()),
            ("classifier", LogisticRegression(max_iter=1000, random_state=42, C=1.0))
        ]),
        "Random Forest": RandomForestClassifier(
            n_estimators=100,
            max_depth=20,
            n_jobs=-1,
            random_state=42
        ),
        "XGBoost": XGBClassifier(
            n_estimators=150,
            max_depth=8,
            learning_rate=0.1,
            n_jobs=-1,
            random_state=42,
            eval_metric="logloss"
        )
    }

    comparison_results = []
    trained_models = {}

    # 5. Train each model and evaluate on the VALIDATION SET
    logger.info("Starting model training and evaluation on Validation set...")
    for name, model in models.items():
        logger.info(f"--- Training {name} ---")
        t_start = time.time()
        model.fit(X_train, y_train)
        fit_time = time.time() - t_start
        logger.info(f"{name} fitted in {fit_time:.2f}s.")

        trained_models[name] = model

        # Evaluate on Validation set
        val_metrics, _ = evaluate_model(model, X_val, y_val, model_name=name, decision_threshold=0.50)
        val_metrics["fit_time_seconds"] = round(fit_time, 2)
        comparison_results.append(val_metrics)

        logger.info(
            f"Validation Results for {name}: "
            f"Accuracy={val_metrics['accuracy']:.4f}, "
            f"Phish Recall={val_metrics['phishing_recall']:.4f}, "
            f"Phish Precision={val_metrics['phishing_precision']:.4f}, "
            f"Phish F1={val_metrics['phishing_f1']:.4f}, "
            f"ROC-AUC={val_metrics['roc_auc']:.4f}"
        )

    # Save model comparison table
    df_comparison = pd.DataFrame(comparison_results)
    comparison_csv_path = os.path.join(reports_dir, "model_comparison.csv")
    df_comparison.to_csv(comparison_csv_path, index=False)
    logger.info(f"Model comparison saved to {comparison_csv_path}")

    # 6. Model Selection based on Validation Phishing F1 and ROC-AUC
    best_row = df_comparison.sort_values(by=["phishing_f1", "roc_auc"], ascending=False).iloc[0]
    best_model_name = best_row["model_name"]
    best_model = trained_models[best_model_name]
    logger.info(f"Selected Best Model based on Validation Performance: '{best_model_name}'")

    # 7. Validation-driven Threshold Tuning for Best Model
    thresh_low, thresh_high, decision_threshold, threshold_info = determine_validation_thresholds(
        best_model, X_val, y_val
    )

    # 8. Final Unbiased Evaluation on UNTOUCHED Test Set
    logger.info("--- Evaluating Final Selected Model on Untouched Test Set ---")
    test_metrics, test_report = evaluate_model(
        best_model, X_test, y_test, model_name=best_model_name, decision_threshold=decision_threshold
    )

    logger.info(
        f"Final Test Metrics for {best_model_name}: "
        f"Accuracy={test_metrics['accuracy']:.4f}, "
        f"Phish Recall={test_metrics['phishing_recall']:.4f}, "
        f"Phish Precision={test_metrics['phishing_precision']:.4f}, "
        f"Phish F1={test_metrics['phishing_f1']:.4f}, "
        f"ROC-AUC={test_metrics['roc_auc']:.4f}"
    )

    # Save classification report
    report_path = os.path.join(reports_dir, "classification_report.txt")
    with open(report_path, "w") as f:
        f.write(f"Final Model: {best_model_name}\n")
        f.write(f"Evaluated on Untouched Test Set ({len(X_test):,} records)\n")
        f.write(f"Calibrated Decision Threshold: {decision_threshold:.2f}\n")
        f.write(f"Calibrated Low Risk Threshold: {thresh_low:.2f}\n")
        f.write(f"Calibrated High Risk Threshold: {thresh_high:.2f}\n\n")
        f.write(test_report)
    logger.info(f"Classification report saved to {report_path}")

    # 9. Extract and Save Feature Importances
    feat_imp_df = None
    if hasattr(best_model, "feature_importances_"):
        importances = best_model.feature_importances_
        feat_imp_df = pd.DataFrame({
            "feature": FEATURE_NAMES,
            "importance": importances
        }).sort_values(by="importance", ascending=False)
    elif hasattr(best_model, "named_steps") and hasattr(best_model.named_steps["classifier"], "coef_"):
        coefs = np.abs(best_model.named_steps["classifier"].coef_[0])
        feat_imp_df = pd.DataFrame({
            "feature": FEATURE_NAMES,
            "importance": coefs
        }).sort_values(by="importance", ascending=False)

    if feat_imp_df is not None:
        feat_imp_path = os.path.join(reports_dir, "feature_importance.csv")
        feat_imp_df.to_csv(feat_imp_path, index=False)
        logger.info(f"Feature importances saved to {feat_imp_path}")

    # 10. Persist Model and Configuration
    model_path = os.path.join(models_dir, "phishing_model.pkl")
    joblib.dump(best_model, model_path)
    logger.info(f"Model saved to {model_path}")

    config_data = {
        "model_version": "phishing-v1.0",
        "best_model_name": best_model_name,
        "feature_names": FEATURE_NAMES,
        "threshold_low": thresh_low,
        "threshold_high": thresh_high,
        "decision_threshold": decision_threshold,
        "validation_metrics": best_row.to_dict(),
        "test_metrics": test_metrics,
        "dataset_metadata": meta,
        "trained_timestamp": time.strftime("%Y-%m-%d %H:%M:%S")
    }

    config_path = os.path.join(models_dir, "feature_config.json")
    with open(config_path, "w") as f:
        json.dump(config_data, f, indent=2)
    logger.info(f"Feature config saved to {config_path}")

    return {
        "best_model_name": best_model_name,
        "validation_comparison": comparison_results,
        "test_metrics": test_metrics,
        "thresholds": threshold_info,
        "model_path": model_path,
        "config_path": config_path
    }


if __name__ == "__main__":
    csv_file = r"C:\Users\HP\.gemini\antigravity\scratch\phishing-detection\data\PhiUSIIL_Phishing_URL_Dataset.csv"
    project_root = r"C:\Users\HP\.gemini\antigravity\scratch\phishing-detection"
    run_training_pipeline(csv_file, output_dir=os.path.join(project_root, "ml"))
