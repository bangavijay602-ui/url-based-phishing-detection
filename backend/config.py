"""
Application Configuration.
Loads settings from environment variables with sensible defaults.
"""

import os
from functools import lru_cache
from typing import List
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "URL-Based Phishing Detection API"
    APP_VERSION: str = "1.0.0"
    MODEL_VERSION: str = "phishing-v1.0"
    
    # Model and feature config filepaths
    BASE_DIR: str = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    MODEL_PATH: str = os.path.join(BASE_DIR, "ml", "models", "phishing_model.pkl")
    CONFIG_PATH: str = os.path.join(BASE_DIR, "ml", "models", "feature_config.json")
    
    # Database
    DATABASE_URL: str = f"sqlite:///{os.path.join(BASE_DIR, 'phishing_detection.db')}"
    
    # Security & limits
    DEBUG: bool = False
    LOG_LEVEL: str = "INFO"
    MAX_URL_LENGTH: int = 2048
    RATE_LIMIT_PER_MINUTE: int = 120
    CORS_ORIGINS: List[str] = ["*"]

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )


@lru_cache()
def get_settings() -> Settings:
    return Settings()
