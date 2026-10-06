import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  ShieldAlert,
  Clock,
  Cpu,
  RotateCcw,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PredictionResponse } from '../types';
import { RiskMeter } from './RiskMeter';
import { DetectionReasons } from './DetectionReasons';
import { UrlIntelligence } from './UrlIntelligence';

interface ResultCardProps {
  result: PredictionResponse;
  onReset: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ result, onReset }) => {
  const [copied, setCopied] = React.useState(false);
  const isPhishing = result.prediction === 'Phishing';

  // Trigger celebration on Legitimate scan
  useEffect(() => {
    if (!isPhishing) {
      try {
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#00ff88', '#00f0ff', '#3b82f6']
        });
      } catch {
        // Ignore in restricted environments
      }
    }
  }, [isPhishing]);

  const copySummary = () => {
    const text = `PhishGuard AI Scan Result:
Target: ${result.url}
Verdict: ${result.prediction.toUpperCase()}
Predicted Probability: ${(result.probability * 100).toFixed(2)}%
Risk Level: ${result.risk_level} (${result.risk_score}/100)
Reasons: ${result.reasons.length > 0 ? result.reasons.join(', ') : 'None'}
Model: ${result.model_version || 'phishing-v1.0'}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formattedProbability = (result.probability * 100).toFixed(2);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border backdrop-blur-2xl transition-all duration-500 ${
        isPhishing
          ? 'bg-gradient-to-b from-rose-950/40 via-[#080B12]/90 to-[#05070D] border-rose-500/40 shadow-[0_0_60px_rgba(255,42,85,0.25)]'
          : 'bg-gradient-to-b from-emerald-950/30 via-[#080B12]/90 to-[#05070D] border-emerald-500/30 shadow-[0_0_60px_rgba(0,255,136,0.2)]'
      }`}
    >
      {/* Top Threat Accent Strip */}
      <div
        className={`h-1.5 w-full ${
          isPhishing
            ? 'bg-gradient-to-r from-rose-600 via-red-500 to-amber-500 animate-pulse'
            : 'bg-gradient-to-r from-emerald-500 via-cyan-400 to-blue-500'
        }`}
      />

      <div className="p-6 sm:p-8 space-y-6">
        {/* Header Verdict Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-4">
            {/* Verdict Shield Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
              className={`w-16 h-16 rounded-2xl flex items-center justify-center border shadow-xl ${
                isPhishing
                  ? 'bg-rose-500/20 border-rose-500/50 text-rose-400 shadow-[0_0_30px_rgba(255,42,85,0.3)]'
                  : 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_30px_rgba(0,255,136,0.3)]'
              }`}
            >
              {isPhishing ? (
                <ShieldAlert className="w-9 h-9 animate-pulse" />
              ) : (
                <ShieldCheck className="w-9 h-9" />
              )}
            </motion.div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  ASSESSMENT VERDICT
                </span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase border ${
                    isPhishing
                      ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                      : 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                  }`}
                >
                  {result.risk_level} RISK
                </span>
              </div>

              <h2
                className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight mt-0.5 ${
                  isPhishing ? 'text-rose-400 drop-shadow-[0_0_15px_rgba(255,42,85,0.4)]' : 'text-emerald-400 drop-shadow-[0_0_15px_rgba(0,255,136,0.4)]'
                }`}
              >
                {isPhishing ? 'PHISHING DETECTED' : 'LEGITIMATE URL'}
              </h2>

              <p className="text-xs font-mono text-slate-400 break-all max-w-xl mt-1">
                <span className="text-slate-500">TARGET:</span> {result.url}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 self-stretch md:self-auto justify-end">
            <button
              onClick={copySummary}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 text-xs font-mono transition-colors"
              title="Copy Scan Summary"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>

            <button
              onClick={onReset}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Scan Another</span>
            </button>
          </div>
        </div>

        {/* Confidence & Telemetry Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Predicted Probability Card */}
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              PREDICTED PROBABILITY
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono text-white">
                {formattedProbability}%
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-mono mt-1">
              Neural model classification confidence
            </p>
          </div>

          {/* Scan Latency Card */}
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>INFERENCE LATENCY</span>
            </div>
            <div className="text-3xl font-extrabold font-mono text-cyan-300">
              {result.processing_time_ms ? `${result.processing_time_ms} ms` : '&lt; 1 ms'}
            </div>
            <p className="text-[11px] text-slate-500 font-mono mt-1">
              Feature extraction &amp; model scoring
            </p>
          </div>

          {/* Model Architecture Card */}
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              <Cpu className="w-3.5 h-3.5 text-violet-400" />
              <span>MODEL ENGINE</span>
            </div>
            <div className="text-3xl font-extrabold font-mono text-violet-300">
              XGBoost
            </div>
            <p className="text-[11px] text-slate-500 font-mono mt-1">
              {result.model_version || 'phishing-v1.0'} &bull; 33 Features
            </p>
          </div>
        </div>

        {/* Main Visualization Row: Risk Meter + Detection Reasons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 flex">
            <div className="w-full">
              <RiskMeter score={result.risk_score} level={result.risk_level} />
            </div>
          </div>

          <div className="lg:col-span-7 flex">
            <DetectionReasons
              reasons={result.reasons}
              prediction={result.prediction}
            />
          </div>
        </div>

        {/* URL Intelligence Section */}
        <UrlIntelligence url={result.url} />
      </div>
    </motion.div>
  );
};
