"""
FastAPI Application Entry Point.
Configures middleware, routes, database initialization, and request tracking.
"""

import time
import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from backend.config import get_settings
from backend.database.database import init_db
from backend.services.prediction_service import prediction_service
from backend.routes import health, prediction, history

# Configure structured logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] [%(name)s] %(message)s"
)
logger = logging.getLogger("phishing_api")

settings = get_settings()


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: initialize database tables and warm up model
    logger.info("Initializing database...")
    init_db()
    logger.info("Database initialized successfully.")
    
    logger.info("Checking ML model status...")
    if prediction_service.is_model_loaded():
        logger.info(f"ML Model '{prediction_service.model_version}' ready for inference.")
    else:
        logger.warning("ML Model not loaded on startup. Ensure model is trained and saved to disk.")
    
    yield
    
    # Shutdown
    logger.info("Shutting down API server.")


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="Production-grade URL-Based Phishing Detection System exposing ML inference via REST API.",
    lifespan=lifespan
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.middleware("http")
async def add_process_time_and_log(request: Request, call_next):
    start_time = time.perf_counter()
    response = await call_next(request)
    process_time_ms = (time.perf_counter() - start_time) * 1000
    response.headers["X-Process-Time-Ms"] = f"{process_time_ms:.2f}"
    logger.info(f"{request.method} {request.url.path} - Status: {response.status_code} - Time: {process_time_ms:.2f}ms")
    return response


# Include API Routers
app.include_router(health.router)
app.include_router(prediction.router)
app.include_router(history.router)


@app.get("/", tags=["Root"])
def root():
    return {
        "message": "URL-Based Phishing Detection API is running.",
        "documentation": "/docs",
        "health": "/health",
        "model_version": prediction_service.model_version
    }
