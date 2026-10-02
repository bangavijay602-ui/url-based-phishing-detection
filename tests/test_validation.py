"""
Input Validation and Security Edge Case Tests.
Verifies defense against empty, malformed, oversized, and injection payloads.
"""

from fastapi.testclient import TestClient


def test_empty_url_rejected(client: TestClient):
    """Empty URL string should return 422 Unprocessable Entity."""
    response = client.post("/predict", json={"url": ""})
    assert response.status_code == 422


def test_whitespace_url_rejected(client: TestClient):
    """Whitespace-only URL should return 422."""
    response = client.post("/predict", json={"url": "     "})
    assert response.status_code == 422


def test_missing_url_field(client: TestClient):
    """Missing required 'url' field should return 422."""
    response = client.post("/predict", json={})
    assert response.status_code == 422


def test_oversized_url_rejected(client: TestClient):
    """URL exceeding 2048 characters should be rejected with 422."""
    long_url = "https://example.com/" + ("a" * 2100)
    response = client.post("/predict", json={"url": long_url})
    assert response.status_code == 422
    assert "exceeds maximum length" in response.text.lower()


def test_control_characters_rejected(client: TestClient):
    """URL containing NULL bytes or control characters should return 422."""
    malicious_url = "https://example.com/\x00malicious"
    response = client.post("/predict", json={"url": malicious_url})
    assert response.status_code == 422


def test_sql_injection_payload_treated_safely(client: TestClient):
    """SQL injection attempt in URL string must be safely analyzed without SQL errors."""
    sql_payload = "https://example.com/login?id=1' OR '1'='1'; DROP TABLE prediction_history;--"
    response = client.post("/predict", json={"url": sql_payload})
    assert response.status_code == 200
    data = response.json()
    assert data["url"] == sql_payload
    assert "prediction" in data


def test_xss_payload_treated_safely(client: TestClient):
    """XSS payload in URL string must be safely parsed as a URL without executing."""
    xss_payload = "https://example.com/search?q=<script>alert('xss')</script>"
    response = client.post("/predict", json={"url": xss_payload})
    assert response.status_code == 200
    assert response.json()["url"] == xss_payload
