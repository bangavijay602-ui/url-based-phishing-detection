import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { api } from '../services/api';
import { HealthResponse } from '../types';

interface HealthIndicatorProps {
  onHealthUpdate?: (health: HealthResponse) => void;
}

export const HealthIndicator: React.FC<HealthIndicatorProps> = ({ onHealthUpdate }) => {
  const [health, setHealth] = useState<HealthResponse>({
    status: 'checking',
    model_loaded: false,
    model_version: '...'
  });
  const [isChecking, setIsChecking] = useState(false);

  const fetchHealth = async () => {
    setIsChecking(true);
    const result = await api.checkHealth();
    setHealth(result);
    setIsChecking(false);
    if (onHealthUpdate) {
      onHealthUpdate(result);
    }
  };

  useEffect(() => {
    fetchHealth();
    const interval = setInterval(fetchHealth, 15000);
    return () => clearInterval(interval);
  }, []);

  const isOnline = health.status === 'healthy' && health.model_loaded;

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono transition-all duration-300 ${
        isOnline
          ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
          : 'bg-rose-950/40 border-rose-500/30 text-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.15)]'
      }`}
      title={`Model Version: ${health.model_version}`}
    >
      <span className="relative flex h-2 w-2">
        {isOnline && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            isOnline ? 'bg-emerald-500' : 'bg-rose-500'
          }`}
        ></span>
      </span>

      <span className="font-medium tracking-wide">
        {isOnline ? 'Detection Engine Online' : 'Detection Engine Offline'}
      </span>

      {isOnline && (
        <span className="text-[10px] text-emerald-400/70 border-l border-emerald-500/20 pl-1.5 hidden sm:inline">
          {health.model_version}
        </span>
      )}

      <button
        onClick={fetchHealth}
        disabled={isChecking}
        className="text-slate-400 hover:text-slate-200 transition-colors ml-0.5 p-0.5"
        title="Refresh Engine Status"
        aria-label="Refresh Engine Status"
      >
        <RefreshCw className={`w-3 h-3 ${isChecking ? 'animate-spin text-cyan-400' : ''}`} />
      </button>
    </div>
  );
};
