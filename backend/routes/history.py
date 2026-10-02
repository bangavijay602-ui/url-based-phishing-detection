"""
History Routes.
Queries past prediction scans from the database.
"""

from typing import List
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from backend.schemas.prediction_schema import HistoryResponse, PredictionDetailResponse
from backend.database.database import get_db
from backend.database.crud import get_prediction_history, get_prediction_by_id, count_predictions

router = APIRouter(tags=["History"])


@router.get("/history", response_model=HistoryResponse)
@router.get("/api/v1/history", response_model=HistoryResponse)
def get_history(
    page: int = Query(1, ge=1, description="Page number starting at 1"),
    limit: int = Query(20, ge=1, le=100, description="Items per page"),
    db: Session = Depends(get_db)
):
    """
    Returns paginated list of past prediction scans.
    """
    skip = (page - 1) * limit
    total = count_predictions(db)
    records = get_prediction_history(db, skip=skip, limit=limit)

    items = [
        PredictionDetailResponse(
            id=r.id,
            url=r.url,
            prediction=r.prediction,
            probability=r.probability,
            risk_level=r.risk_level,
            risk_score=r.risk_score,
            reasons=r.get_reasons_list(),
            model_version=r.model_version,
            processing_time_ms=r.processing_time_ms,
            created_at=r.created_at
        )
        for r in records
    ]

    return HistoryResponse(
        total=total,
        page=page,
        limit=limit,
        items=items
    )


@router.get("/history/{prediction_id}", response_model=PredictionDetailResponse)
@router.get("/api/v1/history/{prediction_id}", response_model=PredictionDetailResponse)
def get_prediction_detail(prediction_id: int, db: Session = Depends(get_db)):
    """
    Retrieves a single prediction scan record by ID.
    """
    record = get_prediction_by_id(db, prediction_id)
    if not record:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Prediction record with ID {prediction_id} not found."
        )

    return PredictionDetailResponse(
        id=record.id,
        url=record.url,
        prediction=record.prediction,
        probability=record.probability,
        risk_level=record.risk_level,
        risk_score=record.risk_score,
        reasons=record.get_reasons_list(),
        model_version=record.model_version,
        processing_time_ms=record.processing_time_ms,
        created_at=record.created_at
    )
