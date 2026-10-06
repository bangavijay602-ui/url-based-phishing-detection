/**
 * Core TypeScript definitions for PhishGuard AI frontend.
 * Aligned with FastAPI backend schemas.
 */

export type PredictionOutcome = 'Legitimate' | 'Phishing';
export type RiskLevel = 'Low' | 'Medium' | 'High';

export interface PredictionRequest {
  url: string;
}

export interface PredictionResponse {
  url: string;
  prediction: PredictionOutcome;
  probability: number;
  risk_level: RiskLevel;
  risk_score: number;
  reasons: string[];
  // Enriched client-side / header metrics
  processing_time_ms?: number;
  model_version?: string;
}

export interface PredictionDetailResponse extends PredictionResponse {
  id: number;
  model_version: string;
  processing_time_ms: number;
  created_at: string;
}

export interface HistoryResponse {
  total: number;
  page: number;
  limit: number;
  items: PredictionDetailResponse[];
}

export interface HealthResponse {
  status: string;
  model_loaded: boolean;
  model_version: string;
}

export interface UrlIntelligence {
  protocol: string;
  hostname: string;
  domain: string;
  subdomainCount: number;
  tld: string;
  path: string;
  queryParamCount: number;
  urlLength: number;
  hasIpAddress: boolean;
  isHttps: boolean;
  entropy: number;
  specialCharCount: number;
}

export interface ScanStage {
  id: number;
  label: string;
  durationMs: number;
}
