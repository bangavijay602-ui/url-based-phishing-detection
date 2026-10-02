"""
Data Loader Module for PhiUSIIL Phishing URL Dataset.
Handles reproducible loading, conflicting-label verification, and deduplication.
"""

import os
import logging
from typing import Tuple, Dict, Any
import pandas as pd
import numpy as np

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger(__name__)


def check_conflicting_labels(df: pd.DataFrame, url_col: str = "URL", label_col: str = "label") -> Tuple[pd.DataFrame, Dict[str, Any]]:
    """
    Checks for URLs in the dataset that have conflicting labels.
    Returns (conflicts_df, conflict_stats).
    """
    # Group by URL and count unique labels
    label_counts = df.groupby(url_col)[label_col].nunique()
    conflicting_urls = label_counts[label_counts > 1].index.tolist()
    
    stats = {
        "total_unique_urls": int(df[url_col].nunique()),
        "total_duplicate_url_entries": int(df[url_col].duplicated(keep=False).sum()),
        "conflicting_url_count": len(conflicting_urls),
        "conflicting_urls": conflicting_urls
    }
    
    conflicts_df = df[df[url_col].isin(conflicting_urls)].copy() if conflicting_urls else pd.DataFrame()
    return conflicts_df, stats


def load_and_clean_dataset(
    filepath: str,
    drop_conflicts: bool = True
) -> Tuple[pd.DataFrame, Dict[str, Any]]:
    """
    Loads the PhiUSIIL dataset, performs conflict verification, drops conflicting URLs
    if requested, and deduplicates identical URLs.

    Standardized Target Mapping:
    In PhiUSIIL:
      label = 1 is Legitimate
      label = 0 is Phishing
    We map:
      is_phishing = 1 if label == 0 else 0
    So positive class is Phishing.
    """
    if not os.path.exists(filepath):
        raise FileNotFoundError(f"Dataset not found at {filepath}")
    
    logger.info(f"Loading PhiUSIIL dataset from {filepath}...")
    df = pd.read_csv(filepath)
    raw_count = len(df)
    logger.info(f"Loaded {raw_count:,} raw records.")

    # Check for conflicting labels on duplicates
    conflicts_df, conflict_stats = check_conflicting_labels(df, url_col="URL", label_col="label")
    logger.info(
        f"Conflicting label check: {conflict_stats['conflicting_url_count']} URLs have conflicting labels."
    )

    if conflict_stats['conflicting_url_count'] > 0 and drop_conflicts:
        logger.warning(
            f"Dropping {len(conflicts_df)} rows associated with {conflict_stats['conflicting_url_count']} conflicting URLs to preserve ground truth integrity."
        )
        df = df[~df["URL"].isin(conflict_stats['conflicting_urls'])].copy()

    # Deduplicate URLs keeping the first record
    before_dedup = len(df)
    df = df.drop_duplicates(subset=["URL"], keep="first").copy()
    dedup_dropped = before_dedup - len(df)
    logger.info(f"Deduplicated URLs: dropped {dedup_dropped} duplicates. Clean dataset size: {len(df):,}")

    # Standardize target: positive class is Phishing (1), negative is Legitimate (0)
    df["is_phishing"] = (df["label"] == 0).astype(int)

    class_distribution = df["is_phishing"].value_counts().to_dict()
    logger.info(f"Class distribution (0=Legitimate, 1=Phishing): {class_distribution}")

    metadata = {
        "raw_record_count": raw_count,
        "clean_record_count": len(df),
        "conflicting_url_count": conflict_stats['conflicting_url_count'],
        "duplicate_rows_dropped": dedup_dropped,
        "class_distribution": class_distribution,
        "phishing_percentage": float(class_distribution.get(1, 0) / len(df) * 100),
        "legitimate_percentage": float(class_distribution.get(0, 0) / len(df) * 100)
    }

    return df, metadata


if __name__ == "__main__":
    data_file = r"C:\Users\HP\.gemini\antigravity\scratch\phishing-detection\data\PhiUSIIL_Phishing_URL_Dataset.csv"
    clean_df, meta = load_and_clean_dataset(data_file)
    print("\nData Loading Summary:")
    for k, v in meta.items():
        print(f"  {k}: {v}")
