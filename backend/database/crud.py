"""
Database CRUD Operations for Prediction History.
"""

from typing import List, Optional
import json
from sqlalchemy.orm import Session
from backend.database.models import PredictionRecord


def create_prediction_record(
    db: Session,
    url: str,
    prediction: str,
    probability: float,
    risk_level: str,
    risk_score: int,
    reasons: List[str],
    model_version: str,
    processing_time_ms: float = 0.0
) -> PredictionRecord:
    record = PredictionRecord(
        url=url,
        prediction=prediction,
        probability=probability,
        risk_level=risk_level,
        risk_score=risk_score,
        reasons=json.dumps(reasons),
        model_version=model_version,
        processing_time_ms=processing_time_ms
    )
    db.add(record)
    db.commit()
    db.refresh(record)
    return record


def get_prediction_by_id(db: Session, prediction_id: int) -> Optional[PredictionRecord]:
    return db.query(PredictionRecord).filter(PredictionRecord.id == prediction_id).first()


def get_prediction_history(db: Session, skip: int = 0, limit: int = 50) -> List[PredictionRecord]:
    return db.query(PredictionRecord).order_by(PredictionRecord.created_at.desc()).offset(skip).limit(limit).all()


def count_predictions(db: Session) -> int:
    return db.query(PredictionRecord).count()
