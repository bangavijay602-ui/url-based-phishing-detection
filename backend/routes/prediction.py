"""
Prediction Route.
Handles incoming URL prediction requests.
"""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from backend.schemas.prediction_schema import PredictionRequest, PredictionResponse
from backend.services.prediction_service import prediction_service
from backend.database.database import get_db

router = APIRouter(tags=["Prediction"])


@router.post("/predict", response_model=PredictionResponse, status_code=status.HTTP_200_OK)
@router.post("/api/v1/predict", response_model=PredictionResponse, status_code=status.HTTP_200_OK)
def predict_url_endpoint(request: PredictionRequest, db: Session = Depends(get_db)):
    """
    Analyzes a given URL for phishing threats.
    Returns:
    - prediction: "Legitimate" or "Phishing"
    - probability: Model confidence
    - risk_level: "Low", "Medium", or "High"
    - risk_score: 0-100
    - reasons: List of detected anomaly explanations
    """
    try:
        result = prediction_service.predict_url(raw_url=request.url, db=db)
        return PredictionResponse(
            url=result["url"],
            prediction=result["prediction"],
            probability=result["probability"],
            risk_level=result["risk_level"],
            risk_score=result["risk_score"],
            reasons=result["reasons"]
        )
    except ValueError as ve:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=str(ve)
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred while analyzing the URL: {str(e)}"
        )
