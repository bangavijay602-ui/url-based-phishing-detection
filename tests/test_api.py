"""
API Integration Tests for FastAPI Endpoints.
Tests: /health, /predict, /history, and /history/{id}.
"""

from fastapi.testclient import TestClient


def test_health_endpoint(client: TestClient):
    """Test GET /health returns 200 and healthy status."""
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert "model_loaded" in data
    assert "model_version" in data


def test_predict_endpoint_legitimate(client: TestClient):
    """Test POST /predict with a legitimate URL."""
    payload = {"url": "https://www.python.org/doc/"}
    response = client.post("/predict", json=payload)
    assert response.status_code == 200
    data = response.json()

    assert data["url"] == payload["url"]
    assert data["prediction"] in ("Legitimate", "Phishing")
    assert isinstance(data["probability"], float)
    assert data["risk_level"] in ("Low", "Medium", "High")
    assert 0 <= data["risk_score"] <= 100
    assert isinstance(data["reasons"], list)


def test_predict_endpoint_phishing(client: TestClient):
    """Test POST /predict with an obvious phishing URL."""
    payload = {"url": "http://192.168.0.1/update-account-bank-security-login/verify.php"}
    response = client.post("/predict", json=payload)
    assert response.status_code == 200
    data = response.json()

    assert data["prediction"] == "Phishing"
    assert data["risk_level"] in ("Medium", "High")
    assert len(data["reasons"]) > 0


def test_predict_v1_alias(client: TestClient):
    """Test POST /api/v1/predict route alias."""
    payload = {"url": "https://github.com"}
    response = client.post("/api/v1/predict", json=payload)
    assert response.status_code == 200
    assert response.json()["url"] == payload["url"]


def test_history_workflow(client: TestClient):
    """Test full cycle: predict -> appears in /history -> fetch by /history/{id}."""
    test_url = "https://www.example-history-test.org"
    pred_res = client.post("/predict", json={"url": test_url})
    assert pred_res.status_code == 200

    # Query history
    hist_res = client.get("/history?page=1&limit=10")
    assert hist_res.status_code == 200
    hist_data = hist_res.json()
    assert hist_data["total"] >= 1
    assert len(hist_data["items"]) >= 1

    item = hist_data["items"][0]
    record_id = item["id"]
    assert "url" in item
    assert "prediction" in item
    assert "risk_score" in item

    # Query by ID
    id_res = client.get(f"/history/{record_id}")
    assert id_res.status_code == 200
    id_data = id_res.json()
    assert id_data["id"] == record_id
    assert id_data["url"] == item["url"]


def test_history_not_found(client: TestClient):
    """Test GET /history/{id} with non-existent ID returns 404."""
    response = client.get("/history/999999")
    assert response.status_code == 404
    assert "not found" in response.json()["detail"].lower()
