"""
Prediction Service.
Loads the trained ML model and configuration, executes inference pipeline,
evaluates risk, generates explainability output, and persists scans to the database.
"""

import os
import json
import time
import logging
from typing import Dict, Any, Optional
import joblib
import pandas as pd
from sqlalchemy.orm import Session

from backend.config import get_settings
from backend.services.feature_service import FeatureService
from backend.services.risk_service import evaluate_risk
from ml.src.explain import explain_prediction
from backend.database.crud import create_prediction_record
from ml.src.feature_extractor import FEATURE_NAMES

logger = logging.getLogger(__name__)
settings = get_settings()


class PredictionService:
    def __init__(self):
        self.model = None
        self.config: Dict[str, Any] = {}
        self.threshold_low = 0.35
        self.threshold_high = 0.70
        self.decision_threshold = 0.50
        self.model_version = settings.MODEL_VERSION
        self._load_artifacts()

    def _load_artifacts(self):
        # Load feature config if present
        if os.path.exists(settings.CONFIG_PATH):
            try:
                with open(settings.CONFIG_PATH, "r") as f:
                    self.config = json.load(f)
                    self.threshold_low = self.config.get("threshold_low", 0.35)
                    self.threshold_high = self.config.get("threshold_high", 0.70)
                    self.decision_threshold = self.config.get("decision_threshold", 0.50)
                    self.model_version = self.config.get("model_version", settings.MODEL_VERSION)
                logger.info(f"Loaded feature config from {settings.CONFIG_PATH}: low={self.threshold_low}, high={self.threshold_high}")
            except Exception as e:
                logger.warning(f"Failed to load config from {settings.CONFIG_PATH}: {e}")

        # Load trained model if present
        if os.path.exists(settings.MODEL_PATH):
            try:
                self.model = joblib.load(settings.MODEL_PATH)
                logger.info(f"Loaded ML model from {settings.MODEL_PATH}")
            except Exception as e:
                logger.error(f"Failed to load model from {settings.MODEL_PATH}: {e}")
        else:
            logger.warning(f"Model file not found at {settings.MODEL_PATH}. Prediction service running in stub mode until model is trained.")

    def is_model_loaded(self) -> bool:
        return self.model is not None

    def reload(self):
        self._load_artifacts()

    def predict_url(self, raw_url: str, db: Optional[Session] = None) -> Dict[str, Any]:
        """
        Executes end-to-end inference flow:
        1. Validate & normalize URL
        2. Extract URL-only features
        3. Run ML inference pipeline
        4. Evaluate risk tier & score
        5. Generate explainable reasons
        6. Persist to DB if session provided
        """
        start_time = time.perf_counter()

        # Step 1: Normalize
        clean_url = FeatureService.validate_and_normalize(raw_url)

        # Step 2: Feature Extraction (Single source of truth)
        features = FeatureService.extract_from_url(clean_url)
        df_features = FeatureService.to_dataframe(features)

        # Step 3: Inference
        if self.model is not None:
            # Predict probability of positive class (Phishing)
            # Check if model has predict_proba
            if hasattr(self.model, "predict_proba"):
                probs = self.model.predict_proba(df_features)[0]
                # Positive class index is 1 (Phishing)
                p_phishing = float(probs[1]) if len(probs) > 1 else float(probs[0])
            else:
                pred = self.model.predict(df_features)[0]
                p_phishing = 1.0 if pred == 1 else 0.0
        else:
            # Heuristic fallback if model not yet saved
            logger.warning("Inference executed without loaded model! Falling back to heuristic assessment.")
            risk_signals = (
                features['is_ip_domain'] * 0.4 +
                (1 - features['is_https']) * 0.2 +
                min(features['suspicious_keyword_count'] * 0.3, 0.6) +
                (1 if features['url_length'] > 80 else 0) * 0.2
            )
            p_phishing = min(0.99, max(0.01, risk_signals))

        # Step 4: Risk Evaluation
        risk_result = evaluate_risk(
            p_phishing=p_phishing,
            threshold_low=self.threshold_low,
            threshold_high=self.threshold_high,
            decision_threshold=self.decision_threshold
        )

        prediction = risk_result["prediction"]
        probability = risk_result["probability"]
        risk_level = risk_result["risk_level"]
        risk_score = risk_result["risk_score"]

        # Step 5: Explainability
        reasons = explain_prediction(
            features=features,
            prediction=prediction,
            probability=probability,
            risk_level=risk_level
        )

        processing_time_ms = round((time.perf_counter() - start_time) * 1000, 2)

        # Step 6: Database logging
        record_id = None
        if db is not None:
            try:
                db_record = create_prediction_record(
                    db=db,
                    url=clean_url,
                    prediction=prediction,
                    probability=probability,
                    risk_level=risk_level,
                    risk_score=risk_score,
                    reasons=reasons,
                    model_version=self.model_version,
                    processing_time_ms=processing_time_ms
                )
                record_id = db_record.id
            except Exception as e:
                logger.error(f"Failed to record prediction to database: {e}")

        return {
            "id": record_id,
            "url": clean_url,
            "prediction": prediction,
            "probability": probability,
            "risk_level": risk_level,
            "risk_score": risk_score,
            "reasons": reasons,
            "model_version": self.model_version,
            "processing_time_ms": processing_time_ms
        }


# Global singleton instance
prediction_service = PredictionService()
