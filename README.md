# URL-Based Phishing Detection System

A production-grade, URL-based phishing detection platform combining machine learning classification, deterministic lexical feature extraction, explainable threat scoring, and a high-performance FastAPI backend.

Trained and evaluated on the full **235,795-row** [PhiUSIIL Phishing URL Dataset](https://archive.ics.uci.edu/dataset/967/phiusiil+phishing+url+dataset).

---

## Table of Contents
1. [Project Overview](#1-project-overview)
2. [Dataset Analysis & Engineering Insights](#2-dataset-analysis--engineering-insights)
3. [Feature Engineering (Single Source of Truth)](#3-feature-engineering-single-source-of-truth)
4. [Machine Learning Pipeline & Models](#4-machine-learning-pipeline--models)
5. [Experimental Results & Model Comparison](#5-experimental-results--model-comparison)
6. [Empirical Risk Classification & Threshold Calibration](#6-empirical-risk-classification--threshold-calibration)
7. [Final Evaluation on Untouched Test Set](#7-final-evaluation-on-untouched-test-set)
8. [Explainable Predictions Engine](#8-explainable-predictions-engine)
9. [Architecture & Backend API](#9-architecture--backend-api)
10. [Database Schema](#10-database-schema)
11. [Installation & Setup](#11-installation--setup)
12. [Running the Application](#12-running-the-application)
13. [CLI Predictor](#13-cli-predictor)
14. [Automated Testing](#14-automated-testing)
15. [Docker Deployment](#15-docker-deployment)

---

## 1. Project Overview

Phishing attacks remain one of the predominant vectors for credential theft, ransomware deployment, and financial fraud. While legacy detection systems rely on static blacklists (which fail against zero-day and dynamically generated domains), modern defense systems require real-time machine learning capable of evaluating arbitrary URLs in sub-millisecond response times.

### Core Objectives
* **Sub-Millisecond Inference**: Predict threat likelihood purely from the URL string without making live network requests to untrusted attacker servers.
* **Leakage-Free ML**: Strict train/validation/test isolation (70% / 15% / 15%) with validation-tuned decision boundaries and an untouched final test partition.
* **Deterministic Single Source of Truth**: Unified feature extraction pipeline (`ml/src/feature_extractor.py`) utilized identically across training and production inference.
* **Actionable Explainability**: Every flagged risk is accompanied by human-readable, feature-grounded justifications (e.g., HTTP scheme, character entropy, IP hostnames, excessive subdomains).
* **Enterprise Backend**: Built with FastAPI, Pydantic validation, structured logging, SQLite/PostgreSQL persistence, and Docker support.

---

## 2. Dataset Analysis & Engineering Insights

The model is trained on the complete **PhiUSIIL Phishing URL Dataset** (`data/PhiUSIIL_Phishing_URL_Dataset.csv`):
* **Total Records**: 235,795
* **Total Columns**: 56
* **Missing Values**: 0 across all columns
* **Target Column**: `label` (int64)
  * `1` = Legitimate (134,850 rows, 57.19%)
  * `0` = Phishing (100,945 rows, 42.81%)
  * Standardized mapping: `is_phishing = 1 if label == 0 else 0`. Positive class represents the threat.

### Deduplication & Label Consistency Verification
Before deduplication, all 425 duplicate URL strings in the dataset were programmatically checked for conflicting labels. **Zero conflicting labels were found** (100% ground-truth consistency). Deduplication yielded **235,370 clean, unique records** (134,850 legitimate, 100,520 phishing).

### Why Webpage / DOM Features Were Excluded
The original PhiUSIIL dataset contains 29 webpage/DOM features (`LineOfCode`, `NoOfJS`, `HasPasswordField`, `NoOfiFrame`, `DomainTitleMatchScore`, etc.). These were **intentionally excluded** from our production model for fundamental security and operational reasons:
1. **SSRF & Malware Execution Risks**: An API server that fetches every submitted URL is immediately vulnerable to Server-Side Request Forgery (SSRF), internal network port scanning, tracking beacons, and drive-by download exploits.
2. **Train-Serve Skew**: In production, the client supplies only a URL string. Fetching live pages adds 1,500ms–5,000ms of network latency and fails when phishing pages are cloaked or taken down.
3. **Data Leakage & Noise**: The `FILENAME` column (e.g. `521848.txt`) was dropped as crawler metadata leakage.

### Dataset Artifact Discovery
Deep analysis of the PhiUSIIL dataset revealed a notable collection artifact:
* **100% of legitimate URLs** in the PhiUSIIL dataset are root domains with `www.` and exactly 2 slashes (`https://www.example.com`). None of the benign training samples contained subpaths.
* Conversely, phishing URLs collected from PhishTank contained deep directory structures, attack paths, and keyword parameters.
* Our feature extractor accounts for this by computing independent lexical and statistical metrics (entropy, character continuity, keyword matching, and IP detection) rather than relying solely on path delimiters.

---

## 3. Feature Engineering (Single Source of Truth)

All 33 features are computed in real time from the URL string by `ml/src/feature_extractor.py`:

| # | Feature Name | Type | Description | Security Rationale |
|---|---|---|---|---|
| 1 | `url_length` | int | Total character length of URL | Phishing URLs often use longer URLs to conceal domains |
| 2 | `domain_length` | int | Character length of the domain/netloc | Spoofed brands often generate extended domain names |
| 3 | `path_length` | int | Character length of URL path | Nested attack scripts increase path length |
| 4 | `query_length` | int | Length of query string | Phishing payloads pass session tracking tokens in query |
| 5 | `num_dots` | int | Count of `.` | Multiple dots indicate subdomains or IP addresses |
| 6 | `num_hyphens` | int | Count of `-` | Hyphens commonly separate spoofed brand names |
| 7 | `num_underscores` | int | Count of `_` | Obfuscation delimiter |
| 8 | `num_slashes` | int | Count of `/` | Path depth indicator |
| 9 | `num_question_marks`| int | Count of `?` | Query parameter initiator |
| 10| `num_equal_signs` | int | Count of `=` | Key-value query delimiter |
| 11| `num_ampersands` | int | Count of `&` | Query parameter separator |
| 12| `num_at_symbols` | int | Count of `@` | Credential injection / browser URL parsing confusion |
| 13| `num_percent_signs`| int | Count of `%` | Hex / percent encoding obfuscation |
| 14| `num_digits` | int | Count of numeric digits | Random strings or IP addresses increase digit counts |
| 15| `digit_ratio` | float | Digits / total URL length | Measures density of numeric characters |
| 16| `num_letters` | int | Count of alphabetic letters | Baseline character volume |
| 17| `letter_ratio` | float | Letters / total URL length | Legitimate URLs exhibit higher letter ratios |
| 18| `num_special_chars`| int | Non-alphanumeric character count | Highlights excessive punctuation and symbols |
| 19| `special_char_ratio`| float| Special characters / URL length | Density of non-standard characters |
| 20| `is_https` | int | 1 if HTTPS, 0 if HTTP | Unencrypted HTTP is a strong phishing indicator |
| 21| `is_ip_domain` | int | 1 if domain is raw IPv4/IPv6 | Attackers host phishing landing pages on raw IPs |
| 22| `num_subdomains` | int | Count of subdomains (excluding `www`) | High subdomain nesting is a classic spoofing technique |
| 23| `has_port` | int | 1 if explicit non-standard port | Phishing kits frequently run on alternative ports (e.g. 8080) |
| 24| `num_path_dirs` | int | Number of directories in path | Deeply nested directory trees |
| 25| `num_query_params` | int | Count of query parameters | Tracking tokens and redirected destinations |
| 26| `is_shortened` | int | 1 if domain is a known URL shortener | Shorteners (bit.ly, tinyurl) mask malicious targets |
| 27| `suspicious_keyword_count`| int | Count of credential/banking keywords | Detects terms: `login`, `verify`, `account`, `banking`, etc. |
| 28| `char_continuation_rate` | float | Longest sequence of same char type / len | Measures character clustering |
| 29| `entropy` | float | Shannon entropy of character distribution | Detects Domain Generation Algorithms (DGA) and randomness |
| 30| `tld_length` | int | Length of top-level domain | Non-standard or long TLDs |
| 31| `has_punycode` | int | 1 if domain contains `xn--` | Detects Internationalized Domain Name (IDN) homograph attacks |
| 32| `consecutive_hyphens` | int | 1 if URL contains `--` | Brand-spoofing delimiter (`paypal--update.com`) |
| 33| `has_obfuscation` | int | 1 if percent-escaped characters present | Character hiding technique |

---

## 4. Machine Learning Pipeline & Models

### Partitioning Strategy
* **Training Set (70%)**: 164,759 URLs (Stratified by label, seed=42)
* **Validation Set (15%)**: 35,305 URLs (Used for model comparison and threshold calibration)
* **Test Set (15%)**: 35,306 URLs (Kept strictly isolated and untouched until final verification)

### Models Evaluated
1. **Logistic Regression (Baseline)**: Scaled with `StandardScaler` inside a Scikit-Learn `Pipeline`, $L_2$ regularization ($C=1.0$), `max_iter=1000`.
2. **Random Forest Classifier**: 100 estimators, `max_depth=20`, balanced multi-tree voting.
3. **XGBoost Classifier**: 150 gradient-boosted trees, `max_depth=8`, `learning_rate=0.1`, `eval_metric="logloss"`.

---

## 5. Experimental Results & Model Comparison

All models were evaluated on the **Validation Set (35,305 samples)** under identical conditions:

| Metric | Logistic Regression | Random Forest | XGBoost (Selected) |
|---|---|---|---|
| **Accuracy** | 99.73% | 99.75% | **99.77%** |
| **Phishing Precision** | 99.99% | 99.97% | **99.98%** |
| **Phishing Recall** | 99.37% | 99.45% | **99.48%** |
| **Phishing F1-Score** | 0.9968 | 0.9971 | **0.9973** |
| **Legitimate Precision** | 99.53% | 99.59% | **99.61%** |
| **Legitimate Recall** | 99.99% | 99.98% | **99.99%** |
| **ROC-AUC** | **0.9985** | 0.9983 | 0.9982 |
| **False Negatives (Missed Phishing)** | 95 | 83 | **79** |
| **False Positives (False Alarms)** | **1** | 4 | 3 |
| **Fit Time** | **0.42s** | 3.03s | 3.74s |

### Metric Importance in Cybersecurity
* **Phishing Recall (Sensitivity)**: Critical because every False Negative represents an undetected malicious URL delivered to an end-user, leading to compromised credentials or malware infection.
* **Phishing Precision**: Critical because high False Positives cause "alert fatigue" and block access to legitimate business web services.
* **XGBoost achieved the lowest False Negatives (79) on validation data while maintaining 99.98% Phishing Precision**, making it the clear choice for the production classifier.

---

## 6. Empirical Risk Classification & Threshold Calibration

Rather than applying arbitrary thresholds, the decision boundary and risk tiers were **empirically calibrated on the Validation Set**:

```text
Validation Probabilities P(Phishing)
 0.00                    0.15                     0.39                0.61                    1.00
  ├─── Low Risk ──────────┼───── Medium Risk ──────┼─── High Risk ─────┴───────────────────────┤
  │ (Likely Legitimate)   │    (Suspicious)        │ (High Risk / Likely Phishing)             │
  │                       │                        │                                           │
  ▼                       ▼                        ▼                                           ▼
Safe domains         Cautionary review       Decision Threshold               Confirmed threat profile
```

* **Decision Threshold ($0.39$)**: Calibrated by maximizing the $F_1$ score on the validation Precision-Recall curve. URLs with $P(\text{Phishing}) \ge 0.39$ are classified as `Phishing`.
* **Low Risk ($P < 0.15$)**: "Low Risk / Likely Legitimate". Risk Score: $0–14$.
* **Medium Risk ($0.15 \le P < 0.61$)**: "Medium Risk / Suspicious". Risk Score: $15–60$.
* **High Risk ($P \ge 0.61$)**: "High Risk / Likely Phishing" (never labeled "Confirmed Phishing"). Risk Score: $61–100$.

---

## 7. Final Evaluation on Untouched Test Set

The finalized XGBoost model was evaluated **once** on the completely untouched Test Set (**35,306 records**):

```text
Final Model: XGBoost
Test Set Size: 35,306 samples (20,228 Legitimate, 15,078 Phishing)
Calibrated Decision Threshold: 0.39

                 precision    recall  f1-score   support

Legitimate (0)     0.9970    0.9997    0.9983     20228
  Phishing (1)     0.9995    0.9960    0.9978     15078

      accuracy                         0.9981     35306
     macro avg     0.9983    0.9978    0.9981     35306
  weighted avg     0.9981    0.9981    0.9981     35306
```

### Confusion Matrix
* **True Negatives**: 20,221
* **False Positives**: 7 (0.03% false alarm rate)
* **False Negatives**: 60 (99.60% recall)
* **True Positives**: 15,018
* **Test ROC-AUC**: **0.9990**

---

## 8. Explainable Predictions Engine

Predictions are accompanied by deterministic, feature-grounded explanations generated by `ml/src/explain.py`:
* **Legitimate URLs ($P < 0.15$)**: Returns an empty array `reasons: []`.
* **Phishing / Suspicious URLs**: Evaluates exact extracted feature values against security risk thresholds:
  * `"HTTP instead of HTTPS (Unencrypted transmission)"`
  * `"IP address used as hostname instead of a registered domain"`
  * `"Suspicious security/credential keywords detected (X keyword matches)"`
  * `"Unusually long URL (X characters)"`
  * `"High character randomness / entropy (X bits) typical of algorithmically generated domains"`
  * `"Excessive subdomain nesting (X subdomains)"`
  * `"Punycode ('xn--') detected indicating potential IDN homograph spoofing"`
  * `"Known URL shortening service obscures the true destination"`

---

## 9. Architecture & Backend API

```text
[Client / API Consumer]
          │
          ▼
   POST /predict
          │
          ▼
 [Input Validation & Sanitization] (Pydantic / Length / Schema checks)
          │
          ▼
 [URL Normalization] (ml/src/feature_extractor.py)
          │
          ▼
 [Deterministic Feature Extraction] (33 URL features computed in ~0.05ms)
          │
          ▼
 [Trained XGBoost Pipeline] (ml/models/phishing_model.pkl)
          │
          ▼
 [Probability Scoring: P(Phishing)]
          │
    ┌─────┴────────────────┐
    ▼                      ▼
[Risk Classification]  [Explainability Engine]
(Low / Med / High)     (Feature-Grounded Reasons)
    │                      │
    └─────┬────────────────┘
          ▼
 [Database Persistence] (SQLite / PostgreSQL)
          │
          ▼
 [Structured JSON Response] (HTTP 200)
```

### Endpoints

#### 1. Health Probe
```http
GET /health
```
**Response**:
```json
{
  "status": "healthy",
  "model_loaded": true,
  "model_version": "phishing-v1.0"
}
```

#### 2. Phishing Prediction
```http
POST /predict
Content-Type: application/json

{
  "url": "https://www.example.com"
}
```
**Response (Legitimate)**:
```json
{
  "url": "https://www.example.com",
  "prediction": "Legitimate",
  "probability": 0.9983,
  "risk_level": "Low",
  "risk_score": 0,
  "reasons": []
}
```

**Request (Suspicious)**:
```http
POST /predict
Content-Type: application/json

{
  "url": "http://secure-login-example.xyz/verify"
}
```
**Response (Phishing)**:
```json
{
  "url": "http://secure-login-example.xyz/verify",
  "prediction": "Phishing",
  "probability": 1.0,
  "risk_level": "High",
  "risk_score": 100,
  "reasons": [
    "HTTP instead of HTTPS (Unencrypted transmission)",
    "Suspicious security/credential keywords detected (3 keyword matches)",
    "High character randomness / entropy (4.40 bits) typical of algorithmically generated domains"
  ]
}
```

#### 3. Prediction History
```http
GET /history?page=1&limit=20
```

#### 4. Prediction by ID
```http
GET /history/{prediction_id}
```

---

## 10. Database Schema

The prediction history is persisted via SQLAlchemy in `prediction_history`:

```sql
CREATE TABLE prediction_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url VARCHAR(2048) NOT NULL,
    prediction VARCHAR(50) NOT NULL,
    probability FLOAT NOT NULL,
    risk_level VARCHAR(50) NOT NULL,
    risk_score INTEGER NOT NULL,
    reasons TEXT NOT NULL,
    model_version VARCHAR(50) NOT NULL,
    processing_time_ms FLOAT NOT NULL DEFAULT 0.0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX ix_prediction_history_url ON prediction_history (url);
CREATE INDEX ix_prediction_history_created_at ON prediction_history (created_at);
```

---

## 11. Installation & Setup

### Prerequisites
* Python 3.10+ (tested on Python 3.14)
* Git

### Step-by-Step Installation
```bash
# 1. Clone repository
git clone <repo-url>
cd phishing-detection

# 2. Create virtual environment
python -m venv .venv

# 3. Activate virtual environment
# Windows:
.venv\Scripts\activate
# Linux/macOS:
source .venv/bin/activate

# 4. Install dependencies
pip install -r requirements.txt

# 5. Configure environment variables (optional)
cp .env.example .env
```

---

## 12. Running the Application

### Train / Retrain Model
```bash
python ml/src/train.py
```
This loads the dataset, performs conflicting-label checks, extracts features, trains and compares Logistic Regression, Random Forest, and XGBoost, calibrates thresholds on the validation set, verifies performance on the untouched test set, and saves `ml/models/phishing_model.pkl` and `ml/models/feature_config.json`.

### Start the FastAPI Server
```bash
uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload
```
API Documentation (Swagger UI) is available at: `http://localhost:8000/docs`

---

## 13. CLI Predictor

Run ad-hoc scans directly from the command line:

```bash
# Pretty terminal output:
python -m ml.src.predict "http://secure-login-example.xyz/verify"

# Raw JSON output:
python -m ml.src.predict "https://www.example.com" --json
```

---

## 14. Automated Testing

Run the full pytest suite covering feature extraction, models, risk scoring, FastAPI routes, and security edge cases:

```bash
pytest tests/ -v
```

All 27 automated test cases pass with 100% success:
* `test_features.py`: Unit tests for all 33 features, IPv4 hostnames, shorteners, punycode, entropy, continuation rate.
* `test_prediction.py`: Risk thresholds, model probability outputs, database persistence.
* `test_api.py`: `/health`, `/predict`, `/history`, and `/history/{id}` workflows.
* `test_validation.py`: Null URLs, whitespace-only, >2048 char overflow, control characters, SQL injection defense, XSS payload safety.

---

## 15. Docker Deployment

### Build the Docker Image
```bash
docker build -t phishing-detection:latest .
```

### Run the Container
```bash
docker run -d -p 8000:8000 --name phishing-service phishing-detection:latest
```

Verify container health:
```bash
curl http://localhost:8000/health
```
