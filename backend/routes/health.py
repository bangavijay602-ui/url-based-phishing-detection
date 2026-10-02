"""
Health Check Route.
"""

from fastapi import APIRouter
from backend.schemas.prediction_schema import HealthResponse
from backend.services.prediction_service import prediction_service
from backend.config import get_settings

router = APIRouter(tags=["Health"])
settings = get_settings()


@router.get("/health", response_model=HealthResponse)
def health_check():
    """
    Returns API health status, loaded model state, and model version.
    """
    return HealthResponse(
        status="healthy",
        model_loaded=prediction_service.is_model_loaded(),
        model_version=prediction_service.model_version
    )
