import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Lock, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="text-center max-w-4xl mx-auto pt-24 sm:pt-28 pb-6 px-4">
      {/* Top Threat Intelligence Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
        <span className="tracking-wide">NEURAL URL INTERCEPTOR &bull; XGBOOST ACTIVE</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5"
      >
        AI-Powered URL{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 drop-shadow-[0_0_25px_rgba(0,240,255,0.3)]">
          Phishing Detection
        </span>
      </motion.h1>

      {/* Supporting Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed mb-6"
      >
        Analyze suspicious URLs in real time using machine-learning based threat detection.
      </motion.p>

      {/* Tech Spec Badges */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-mono text-slate-400"
      >
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>99.81% Test Accuracy</span>
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800">
          <Zap className="w-3.5 h-3.5 text-blue-400" />
          <span>Sub-Millisecond Inference</span>
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800">
          <Cpu className="w-3.5 h-3.5 text-violet-400" />
          <span>33 Lexical Features</span>
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800">
          <Lock className="w-3.5 h-3.5 text-emerald-400" />
          <span>Zero Server-Side Crawl (No SSRF)</span>
        </span>
      </motion.div>
    </div>
  );
};
