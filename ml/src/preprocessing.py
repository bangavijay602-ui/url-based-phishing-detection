"""
Preprocessing Module.
Builds scikit-learn compatible preprocessing pipelines and transformations.
"""

from typing import List, Tuple
import numpy as np
import pandas as pd
from sklearn.base import BaseEstimator, TransformerMixin
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler

from ml.src.feature_extractor import FEATURE_NAMES, extract_features


class URLFeatureTransformer(BaseEstimator, TransformerMixin):
    """
    Scikit-learn compatible transformer that takes an iterable of raw URL strings
    and outputs a 2D numpy array or DataFrame of extracted features.
    Guarantees that training and inference share the exact same extraction pipeline.
    """

    def __init__(self, feature_names: List[str] = None):
        self.feature_names = feature_names or FEATURE_NAMES

    def fit(self, X, y=None):
        return self

    def transform(self, X):
        """
        X can be a pandas Series, list of strings, or 1D array of URLs.
        """
        if isinstance(X, pd.Series):
            urls = X.tolist()
        elif isinstance(X, np.ndarray):
            urls = X.ravel().tolist()
        elif isinstance(X, list):
            urls = X
        else:
            urls = [str(X)]

        feature_dicts = [extract_features(u) for u in urls]
        # Return as DataFrame with specified column ordering
        return pd.DataFrame(feature_dicts)[self.feature_names]


def get_feature_matrix_from_urls(urls: List[str]) -> pd.DataFrame:
    """
    Batch feature extraction utility.
    """
    feature_dicts = [extract_features(u) for u in urls]
    return pd.DataFrame(feature_dicts)[FEATURE_NAMES]


def build_pipeline_for_model(model_estimator, with_scaler: bool = False) -> Pipeline:
    """
    Wraps an estimator in a pipeline with optional scaling.
    """
    steps = []
    if with_scaler:
        steps.append(('scaler', StandardScaler()))
    steps.append(('classifier', model_estimator))
    return Pipeline(steps)
