"""
Feature Service for Backend API.
Uses the single source of truth feature extractor from ml.src.feature_extractor.
"""

from typing import Dict, Any, List
import pandas as pd
from ml.src.feature_extractor import extract_features, FEATURE_NAMES, normalize_url, validate_url


class FeatureService:
    @staticmethod
    def extract_from_url(url: str) -> Dict[str, Any]:
        """
        Extracts features for a single URL using the centralized feature extractor.
        """
        return extract_features(url)

    @staticmethod
    def to_dataframe(features: Dict[str, Any]) -> pd.DataFrame:
        """
        Converts extracted feature dict to single-row DataFrame aligned with FEATURE_NAMES.
        """
        return pd.DataFrame([features])[FEATURE_NAMES]

    @staticmethod
    def validate_and_normalize(url: str) -> str:
        """
        Validates URL and returns normalized string. Raises ValueError if invalid.
        """
        is_valid, err = validate_url(url)
        if not is_valid:
            raise ValueError(err)
        return normalize_url(url)
