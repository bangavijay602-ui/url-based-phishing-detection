import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { RiskLevel } from '../types';

interface RiskMeterProps {
  score: number; // 0 to 100
  level: RiskLevel;
}

export const RiskMeter: React.FC<RiskMeterProps> = ({ score, level }) => {
  // Spring animation for smooth number counting
  const springValue = useSpring(0, { stiffness: 45, damping: 15 });
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    springValue.set(score);
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayScore(Math.round(latest));
    });
    return () => unsubscribe();
  }, [score, springValue]);

  // Color config based on risk level and score
  const isMedium = level === 'Medium' || (score >= 35 && score < 61);
  const isThreat = level === 'High' || score >= 61;

  const activeColor = isThreat
    ? '#ff2a55'
    : isMedium
    ? '#f59e0b'
    : '#00ff88';

  const glowShadow = isThreat
    ? '0 0 25px rgba(255,42,85,0.4)'
    : isMedium
    ? '0 0 25px rgba(245,158,11,0.4)'
    : '0 0 25px rgba(0,255,136,0.4)';

  // Calculate rotation angle for 180-degree gauge needle (-90deg to +90deg)
  const needleRotation = -90 + (displayScore / 100) * 180;

  return (
    <div className="flex flex-col items-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md">
      <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
        <span>SECURITY RISK INDEX</span>
        <span
          className="font-bold px-2 py-0.5 rounded text-[11px] tracking-wider uppercase border"
          style={{
            color: activeColor,
            borderColor: `${activeColor}40`,
            backgroundColor: `${activeColor}15`,
            boxShadow: glowShadow
          }}
        >
          {level} RISK
        </span>
      </div>

      {/* 2.5D Semi-Circular Gauge Meter */}
      <div className="relative w-64 h-36 flex items-end justify-center overflow-hidden my-2">
        {/* Outer Background Arc */}
        <svg viewBox="0 0 200 110" className="w-64 h-36">
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00ff88" />
              <stop offset="45%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ff2a55" />
            </linearGradient>
            <filter id="gaugeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Track background */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="rgba(30, 41, 59, 0.8)"
            strokeWidth="14"
            strokeLinecap="round"
          />

          {/* Active Gradient Arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray="251.2"
            strokeDashoffset={251.2 - (251.2 * displayScore) / 100}
            style={{
              transition: 'stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            filter="url(#gaugeGlow)"
          />

          {/* Scale tick marks */}
          <text x="22" y="108" fill="#64748b" fontSize="8" fontFamily="monospace">0</text>
          <text x="96" y="24" fill="#64748b" fontSize="8" fontFamily="monospace">50</text>
          <text x="170" y="108" fill="#64748b" fontSize="8" fontFamily="monospace">100</text>
        </svg>

        {/* Center Needle / Pivot */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <motion.div
            className="w-1.5 h-16 origin-bottom rounded-full"
            style={{
              backgroundColor: activeColor,
              boxShadow: glowShadow,
              transform: `rotate(${needleRotation}deg)`
            }}
            transition={{ type: 'spring', stiffness: 60, damping: 15 }}
          />
          <div
            className="w-5 h-5 rounded-full border-2 border-slate-900 -mt-2.5 z-10"
            style={{ backgroundColor: activeColor }}
          />
        </div>
      </div>

      {/* Numerical Risk Score Display */}
      <div className="text-center mt-2">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-extrabold font-mono tracking-tight text-white">
            {displayScore}
          </span>
          <span className="text-slate-400 font-mono text-sm">/ 100</span>
        </div>
        <p className="text-xs font-mono text-slate-400 mt-1">
          {isThreat
            ? 'High probability of malicious intent or credential harvesting'
            : isMedium
            ? 'Suspicious structure detected; exercise caution'
            : 'Statistical profile aligns with verified legitimate domains'}
        </p>
      </div>

      {/* Linear Track Breakdown Bar */}
      <div className="w-full mt-4 pt-4 border-t border-slate-800/80">
        <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1.5">
          <span>0 (SAFE)</span>
          <span>35</span>
          <span>61</span>
          <span>100 (THREAT)</span>
        </div>
        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${displayScore}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, #00ff88, #f59e0b, #ff2a55)`,
              boxShadow: glowShadow
            }}
          />
        </div>
      </div>
    </div>
  );
};
