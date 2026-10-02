"""
Pydantic Schemas for Request Validation and Response Serialization.
"""

from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, Field, field_validator
from ml.src.feature_extractor import validate_url, normalize_url


class PredictionRequest(BaseModel):
    url: str = Field(..., description="The URL to analyze for phishing threats.", json_schema_extra={"example": "https://example.com/login"})

    @field_validator("url")
    @classmethod
    def validate_url_string(cls, v: str) -> str:
        if not v or not v.strip():
            raise ValueError("URL cannot be empty.")
        cleaned = v.strip()
        if len(cleaned) > 2048:
            raise ValueError("URL exceeds maximum length of 2048 characters.")
        
        is_valid, err = validate_url(cleaned)
        if not is_valid:
            raise ValueError(err)
        return cleaned


class PredictionResponse(BaseModel):
    url: str
    prediction: str = Field(..., description="Classification outcome: 'Legitimate' or 'Phishing'")
    probability: float = Field(..., description="Confidence probability for the predicted class or threat")
    risk_level: str = Field(..., description="Risk tier: 'Low', 'Medium', or 'High'")
    risk_score: int = Field(..., description="Risk score from 0 (safest) to 100 (most malicious)")
    reasons: List[str] = Field(default_factory=list, description="List of feature-grounded explanatory reasons")

    model_config = {
        "json_schema_extra": {
            "example": {
                "url": "https://example.com/login",
                "prediction": "Legitimate",
                "probability": 0.97,
                "risk_level": "Low",
                "risk_score": 3,
                "reasons": []
            }
        }
    }


class PredictionDetailResponse(PredictionResponse):
    id: int
    model_version: str
    processing_time_ms: float
    created_at: datetime


class HistoryResponse(BaseModel):
    total: int
    page: int
    limit: int
    items: List[PredictionDetailResponse]


class HealthResponse(BaseModel):
    status: str = "healthy"
    model_loaded: bool = True
    model_version: str = "phishing-v1.0"
