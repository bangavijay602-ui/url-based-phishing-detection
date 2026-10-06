import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Activity, Cpu, Search, Sparkles } from 'lucide-react';

interface ScanAnimationProps {
  url: string;
  onAnimationComplete?: () => void;
  apiFinished?: boolean;
}

const STAGES = [
  { id: 1, label: 'Parsing URL & Normalizing Structure', icon: Search },
  { id: 2, label: 'Extracting 33 Syntactic Features', icon: Cpu },
  { id: 3, label: 'Analyzing Threat Patterns & Entropy', icon: Activity },
  { id: 4, label: 'Running ML Model (XGBoost)', icon: Shield },
  { id: 5, label: 'Generating Risk Assessment', icon: Sparkles }
];

export const ScanAnimation: React.FC<ScanAnimationProps> = ({
  url,
  onAnimationComplete,
  apiFinished: _apiFinished = false
}) => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  useEffect(() => {
    // Total target duration: ~1.4 seconds (280ms per stage)
    const stageDuration = 280;
    const interval = setInterval(() => {
      setCurrentStageIndex((prev) => {
        if (prev < STAGES.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          if (onAnimationComplete) {
            setTimeout(onAnimationComplete, 150);
          }
          return prev;
        }
      });
    }, stageDuration);

    return () => clearInterval(interval);
  }, [onAnimationComplete]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-[#080B12]/90 border border-cyan-500/30 p-8 shadow-[0_0_50px_rgba(0,240,255,0.2)] backdrop-blur-xl">
      {/* Laser Scanning Beam sweeping across top */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse shadow-[0_0_15px_#00f0ff]" />
      
      {/* Vertical Sweep Line */}
      <motion.div
        initial={{ top: '0%' }}
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}
        className="absolute inset-x-0 h-24 bg-gradient-to-b from-cyan-500/10 via-cyan-400/20 to-transparent pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Holographic Radar / Scanner Graphic */}
        <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
          {/* Outer Rotating Cyber Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/40"
          />

          {/* Middle Counter-Rotating Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
            className="absolute inset-2 rounded-full border border-blue-500/50"
          />

          {/* Radar Sweep Arc */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, rgba(0, 240, 255, 0.4) 0deg, transparent 90deg, transparent 360deg)'
            }}
          />

          {/* Inner Pulsing Core */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_20px_#00f0ff]"
          >
            <Shield className="w-6 h-6 text-slate-950 font-bold" />
          </motion.div>

          {/* Corner Crosshairs */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />
        </div>

        {/* URL Target Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 max-w-full mb-6">
          <span className="text-cyan-400 font-bold">TARGET:</span>
          <span className="truncate max-w-xs sm:max-w-md">{url}</span>
        </div>

        {/* Stage List Progress */}
        <div className="w-full max-w-md space-y-2.5">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isCompleted = idx < currentStageIndex;
            const isCurrent = idx === currentStageIndex;

            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl border text-xs font-mono transition-all duration-300 ${
                  isCompleted
                    ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300'
                    : isCurrent
                    ? 'bg-cyan-950/40 border-cyan-400/60 text-cyan-200 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                    : 'bg-slate-900/30 border-slate-800/50 text-slate-500'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                      isCompleted
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : isCurrent
                        ? 'bg-cyan-500/20 text-cyan-400 animate-pulse'
                        : 'bg-slate-800 text-slate-600'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className={isCurrent ? 'font-semibold text-cyan-100' : ''}>
                    {stage.label}
                  </span>
                </div>

                <div>
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : isCurrent ? (
                    <span className="inline-block w-3 h-3 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                  ) : (
                    <span className="text-[10px] text-slate-600 font-mono">WAITING</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-6 text-[11px] font-mono text-cyan-400/70 tracking-widest uppercase animate-pulse">
          Autonomous Neural Interceptor Active...
        </p>
      </div>
    </div>
  );
};
