import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  Globe,
  Lock,
  Key,
  Layers,
  FileCode,
  Zap
} from 'lucide-react';
import { PredictionOutcome } from '../types';

interface DetectionReasonsProps {
  reasons: string[];
  prediction: PredictionOutcome;
}

// Map keywords to relevant cybersecurity icons
function getReasonIcon(reason: string) {
  const r = reason.toLowerCase();
  if (r.includes('http instead') || r.includes('unencrypted')) return Lock;
  if (r.includes('ip address')) return Globe;
  if (r.includes('keyword') || r.includes('credential')) return Key;
  if (r.includes('subdomain') || r.includes('directory')) return Layers;
  if (r.includes('entropy') || r.includes('randomness')) return Zap;
  if (r.includes('punycode') || r.includes('obfuscation')) return FileCode;
  return AlertTriangle;
}

export const DetectionReasons: React.FC<DetectionReasonsProps> = ({ reasons, prediction }) => {
  const [expanded, setExpanded] = useState(true);
  const isPhishing = prediction === 'Phishing';

  return (
    <div className="w-full rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md overflow-hidden">
      {/* Header bar with toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800/30 transition-colors text-left"
        aria-expanded={expanded}
      >
        <div className="flex items-center gap-2.5">
          {isPhishing ? (
            <ShieldAlert className="w-4 h-4 text-rose-400" />
          ) : (
            <CheckCircle className="w-4 h-4 text-emerald-400" />
          )}
          <span className="text-sm font-mono font-semibold tracking-wide text-white">
            {isPhishing ? 'Threat Factor Decomposition' : 'Security Verification Indicators'}
          </span>
          <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
            {reasons.length} {reasons.length === 1 ? 'factor' : 'factors'}
          </span>
        </div>

        <div className="flex items-center gap-1 text-slate-400 hover:text-slate-200 text-xs font-mono">
          <span>{expanded ? 'Collapse' : 'Expand'}</span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {/* Expandable Reasons List */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-6 pt-2 border-t border-slate-800/60"
          >
            {reasons.length === 0 ? (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-emerald-300 text-xs font-mono">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  No significant risk indicators detected. URL characteristics conform to verified benign domain models.
                </span>
              </div>
            ) : (
              <div className="space-y-2.5">
                {reasons.map((reason, index) => {
                  const Icon = getReasonIcon(reason);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: index * 0.08 }}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20 hover:border-rose-500/40 transition-colors"
                    >
                      <div className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 flex-shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-mono text-rose-200/90 leading-relaxed">
                          {reason}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30">
                        DETECTED
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
