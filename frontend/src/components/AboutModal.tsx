import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Cpu, Database, Lock, CheckCircle2 } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-3xl rounded-3xl bg-[#080B12] border border-cyan-500/30 p-6 sm:p-8 shadow-[0_0_60px_rgba(0,240,255,0.2)] text-slate-200 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-mono font-bold text-white tracking-wide">
                  SYSTEM ARCHITECTURE &amp; THREAT MODEL
                </h3>
                <p className="text-xs font-mono text-cyan-400">
                  PhishGuard AI &bull; XGBoost Classifier (phishing-v1.0)
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="py-6 space-y-6 text-xs font-mono leading-relaxed">
            {/* Mission Statement */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300">
              <p>
                PhishGuard AI intercepts phishing campaigns at the URL ingress point. Unlike legacy signature blacklists that fail against dynamic short-lived domains, our system leverages a gradient-boosted tree ensemble trained on the 235,795-record PhiUSIIL dataset, generating deterministic risk scores in under 1 millisecond.
              </p>
            </div>

            {/* Architecture Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex items-center gap-2 text-cyan-400 font-bold mb-2">
                  <Lock className="w-4 h-4" />
                  <span>Zero-Crawl Safety (No SSRF)</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  The server strictly evaluates lexical and syntactic properties directly from the URL. It never visits or renders the target webpage, eliminating SSRF vulnerabilities and malware execution vectors.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex items-center gap-2 text-violet-400 font-bold mb-2">
                  <Cpu className="w-4 h-4" />
                  <span>33 Neural Features</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  Extracts character entropy, continuation rate, subdomain depth, delimiter frequencies, credential injection keywords, IP hostnames, and punycode spoofing indicators in real time.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Validated Thresholds</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  Thresholds calibrated on validation precision-recall curve: Low Risk (&lt;0.15), Decision Boundary (0.39), High Risk (&ge;0.61). Untouched test evaluation achieved 99.81% accuracy with only 7 false positives across 20,228 benign sites.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold mb-2">
                  <Database className="w-4 h-4" />
                  <span>FastAPI &amp; Audit Trail</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  High-throughput asynchronous REST API backed by SQLite/PostgreSQL with Pydantic validation, structured latency tracking, and request auditing.
                </p>
              </div>
            </div>

            {/* Model Comparison Table */}
            <div className="border border-slate-800 rounded-xl overflow-hidden">
              <div className="bg-slate-900 px-4 py-2 text-[11px] font-bold text-white border-b border-slate-800">
                EMPIRICAL BENCHMARK (VALIDATION PARTITION)
              </div>
              <div className="p-4 overflow-x-auto">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="text-slate-400 border-b border-slate-800">
                      <th className="pb-2">Model</th>
                      <th className="pb-2">Accuracy</th>
                      <th className="pb-2">Phishing Recall</th>
                      <th className="pb-2">Phishing Precision</th>
                      <th className="pb-2">ROC-AUC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    <tr>
                      <td className="py-2 text-white font-bold">XGBoost (Active)</td>
                      <td className="py-2 text-emerald-400 font-semibold">99.77%</td>
                      <td className="py-2">99.48%</td>
                      <td className="py-2">99.98%</td>
                      <td className="py-2">0.9982</td>
                    </tr>
                    <tr>
                      <td className="py-2">Random Forest</td>
                      <td className="py-2">99.75%</td>
                      <td className="py-2">99.45%</td>
                      <td className="py-2">99.97%</td>
                      <td className="py-2">0.9983</td>
                    </tr>
                    <tr>
                      <td className="py-2">Logistic Regression</td>
                      <td className="py-2">99.73%</td>
                      <td className="py-2">99.37%</td>
                      <td className="py-2">99.99%</td>
                      <td className="py-2">0.9985</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>Powered by PhiUSIIL Benchmark &bull; FastAPI Backend</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
