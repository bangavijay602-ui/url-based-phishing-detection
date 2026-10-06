/**
 * API Service for PhishGuard AI Backend.
 * Communicates with FastAPI server at VITE_API_BASE_URL (default: http://localhost:8000).
 */

import { HealthResponse, HistoryResponse, PredictionDetailResponse, PredictionResponse } from '../types';

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000').replace(/\/$/, '');

const TIMEOUT_MS = 12000;

async function fetchWithTimeout(url: string, options: RequestInit = {}): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    return response;
  } catch (error: any) {
    if (error.name === 'AbortError') {
      throw new Error('Analysis timed out. Please try again.');
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

export const api = {
  getBaseUrl(): string {
    return API_BASE_URL;
  },

  /**
   * Health check probe for FastAPI backend and model readiness.
   */
  async checkHealth(): Promise<HealthResponse> {
    try {
      const res = await fetchWithTimeout(`${API_BASE_URL}/health`);
      if (!res.ok) {
        throw new Error(`Health check returned status ${res.status}`);
      }
      return await res.json();
    } catch (err: any) {
      return {
        status: 'unreachable',
        model_loaded: false,
        model_version: 'offline'
      };
    }
  },

  /**
   * Predict threat probability and classification for a target URL.
   */
  async predictUrl(url: string): Promise<PredictionResponse> {
    const startTime = performance.now();
    let res: Response;

    try {
      res = await fetchWithTimeout(`${API_BASE_URL}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url.trim() })
      });
    } catch (err: any) {
      if (err.message && err.message.includes('timed out')) {
        throw err;
      }
      throw new Error('Detection service is temporarily unavailable. Ensure backend is running.');
    }

    if (!res.ok) {
      let errorDetail = 'Please enter a valid URL.';
      try {
        const errorJson = await res.json();
        if (errorJson.detail) {
          if (Array.isArray(errorJson.detail)) {
            errorDetail = errorJson.detail.map((d: any) => d.msg || d).join(', ');
          } else {
            errorDetail = String(errorJson.detail);
          }
        }
      } catch {
        // Fallback to status text
      }
      throw new Error(errorDetail);
    }

    const data: PredictionResponse = await res.json();

    // Extract server process time header if present, else fallback to client measurement
    const headerTime = res.headers.get('X-Process-Time-Ms');
    const elapsedMs = headerTime ? parseFloat(headerTime) : Math.round(performance.now() - startTime);

    return {
      ...data,
      processing_time_ms: elapsedMs,
      model_version: data.model_version || 'phishing-v1.0'
    };
  },

  /**
   * Retrieve historical scan records from database.
   */
  async getHistory(page: number = 1, limit: number = 20): Promise<HistoryResponse> {
    try {
      const res = await fetchWithTimeout(`${API_BASE_URL}/history?page=${page}&limit=${limit}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch history (HTTP ${res.status})`);
      }
      return await res.json();
    } catch (err: any) {
      console.warn('Scan history unavailable:', err);
      return {
        total: 0,
        page: 1,
        limit,
        items: []
      };
    }
  },

  /**
   * Fetch single scan by primary key.
   */
  async getPrediction(id: number): Promise<PredictionDetailResponse> {
    const res = await fetchWithTimeout(`${API_BASE_URL}/history/${id}`);
    if (!res.ok) {
      throw new Error(`Prediction record #${id} not found.`);
    }
    return await res.json();
  }
};
