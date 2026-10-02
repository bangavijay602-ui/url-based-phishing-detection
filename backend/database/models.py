"""
SQLAlchemy ORM Models.
"""

from datetime import datetime, timezone
import json
from sqlalchemy import Column, Integer, String, Float, Text, DateTime
from backend.database.database import Base


class PredictionRecord(Base):
    __tablename__ = "prediction_history"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    url = Column(String(2048), nullable=False, index=True)
    prediction = Column(String(50), nullable=False)
    probability = Column(Float, nullable=False)
    risk_level = Column(String(50), nullable=False)
    risk_score = Column(Integer, nullable=False)
    reasons = Column(Text, nullable=False, default="[]")
    model_version = Column(String(50), nullable=False)
    processing_time_ms = Column(Float, nullable=False, default=0.0)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), index=True)

    def get_reasons_list(self):
        try:
            return json.loads(self.reasons)
        except Exception:
            return []

    def set_reasons_list(self, reasons_list):
        self.reasons = json.dumps(reasons_list)
