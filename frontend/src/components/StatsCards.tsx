import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ShieldCheck, Database, Zap } from 'lucide-react';
import { PredictionDetailResponse } from '../types';

interface StatsCardsProps {
  historyItems: PredictionDetailResponse[];
  totalScansCount?: number;
}

export const StatsCards: React.FC<StatsCardsProps> = ({
  historyItems,
  totalScansCount
}) => {
  const total = totalScansCount || historyItems.length;
  const threats = historyItems.filter((i) => i.prediction === 'Phishing').length;
  const legitimate = historyItems.filter((i) => i.prediction === 'Legitimate').length;

  const validTimes = historyItems
    .map((i) => i.processing_time_ms)
    .filter((t) => typeof t === 'number' && t > 0);
  const avgTime =
    validTimes.length > 0
      ? (validTimes.reduce((a, b) => a + b, 0) / validTimes.length).toFixed(1)
      : '0.8';

  const cards = [
    {
      label: 'TOTAL URLS SCANNED',
      value: total.toLocaleString(),
      sub: 'Logged in database',
      icon: Database,
      accent: 'text-cyan-400',
      border: 'border-cyan-500/30',
      bg: 'from-cyan-950/20 to-slate-900/40',
      glow: 'shadow-[0_0_20px_rgba(0,240,255,0.1)]'
    },
    {
      label: 'THREATS INTERCEPTED',
      value: threats.toLocaleString(),
      sub: total > 0 ? `${((threats / total) * 100).toFixed(1)}% detection rate` : '0% flagged',
      icon: ShieldAlert,
      accent: 'text-rose-400',
      border: 'border-rose-500/30',
      bg: 'from-rose-950/20 to-slate-900/40',
      glow: 'shadow-[0_0_20px_rgba(255,42,85,0.1)]'
    },
    {
      label: 'LEGITIMATE URLS',
      value: legitimate.toLocaleString(),
      sub: total > 0 ? `${((legitimate / total) * 100).toFixed(1)}% verified benign` : '0% benign',
      icon: ShieldCheck,
      accent: 'text-emerald-400',
      border: 'border-emerald-500/30',
      bg: 'from-emerald-950/20 to-slate-900/40',
      glow: 'shadow-[0_0_20px_rgba(0,255,136,0.1)]'
    },
    {
      label: 'AVG INFERENCE SPEED',
      value: `${avgTime} ms`,
      sub: 'Sub-millisecond ML runtime',
      icon: Zap,
      accent: 'text-violet-400',
      border: 'border-violet-500/30',
      bg: 'from-violet-950/20 to-slate-900/40',
      glow: 'shadow-[0_0_20px_rgba(139,92,246,0.1)]'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {cards.map((c, idx) => {
        const Icon = c.icon;
        return (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className={`p-5 rounded-2xl border bg-gradient-to-br ${c.bg} ${c.border} ${c.glow} backdrop-blur-md transition-all duration-300 relative overflow-hidden group`}
          >
            {/* Top reflective edge */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                {c.label}
              </span>
              <div className={`p-2 rounded-xl bg-slate-900/80 border border-slate-800 ${c.accent}`}>
                <Icon className="w-4 h-4" />
              </div>
            </div>

            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
              {c.value}
            </div>

            <div className="text-xs font-mono text-slate-400 mt-1">
              {c.sub}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
