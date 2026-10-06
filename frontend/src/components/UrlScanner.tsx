import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, ArrowRight, AlertCircle, X } from 'lucide-react';
import { ScanAnimation } from './ScanAnimation';
import { ResultCard } from './ResultCard';
import { PredictionResponse } from '../types';
import { api } from '../services/api';

interface UrlScannerProps {
  onScanCompleted?: (result: PredictionResponse) => void;
  onThreatDetected?: (isThreat: boolean) => void;
}

const SAMPLE_URLS = [
  { label: 'Benign Target', url: 'https://www.google.com', safe: true },
  { label: 'Phishing Target', url: 'http://secure-login-example.xyz/verify', safe: false },
  { label: 'Credential Spoof', url: 'http://192.168.1.1/update-account-bank-security-login/verify.php', safe: false },
  { label: 'Shortened Link', url: 'https://bit.ly/secure-link', safe: false }
];

export const UrlScanner: React.FC<UrlScannerProps> = ({
  onScanCompleted,
  onThreatDetected
}) => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [result, setResult] = useState<PredictionResponse | null>(null);

  // Background API data holder while animation finishes
  const [pendingResult, setPendingResult] = useState<PredictionResponse | null>(null);
  const [apiDone, setApiDone] = useState(false);

  const handleScan = async (targetUrl?: string) => {
    const rawUrl = (targetUrl || url).trim();

    if (!rawUrl) {
      setErrorMessage('Please enter a valid URL to analyze.');
      return;
    }

    setErrorMessage(null);
    setIsScanning(true);
    setResult(null);
    setPendingResult(null);
    setApiDone(false);

    try {
      const response = await api.predictUrl(rawUrl);
      setPendingResult(response);
      setApiDone(true);
    } catch (err: any) {
      setIsScanning(false);
      setErrorMessage(err.message || 'An error occurred during threat analysis.');
      if (onThreatDetected) onThreatDetected(false);
    }
  };

  const handleAnimationFinish = () => {
    if (pendingResult) {
      setResult(pendingResult);
      setIsScanning(false);
      if (onScanCompleted) {
        onScanCompleted(pendingResult);
      }
      if (onThreatDetected) {
        onThreatDetected(pendingResult.prediction === 'Phishing');
      }
    } else {
      // If API took slightly longer than 1.4s, wait for API
      const interval = setInterval(() => {
        setPendingResult((currentPending) => {
          if (currentPending) {
            clearInterval(interval);
            setResult(currentPending);
            setIsScanning(false);
            if (onScanCompleted) onScanCompleted(currentPending);
            if (onThreatDetected) onThreatDetected(currentPending.prediction === 'Phishing');
          }
          return currentPending;
        });
      }, 100);
      setTimeout(() => clearInterval(interval), 5000);
    }
  };

  const handleReset = () => {
    setResult(null);
    setIsScanning(false);
    setPendingResult(null);
    setUrl('');
    setErrorMessage(null);
    if (onThreatDetected) onThreatDetected(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4">
      <AnimatePresence mode="wait">
        {result ? (
          /* Result View */
          <ResultCard key="result" result={result} onReset={handleReset} />
        ) : isScanning ? (
          /* 3D Cinematic Scanning Sequence */
          <motion.div
            key="scanning"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <ScanAnimation
              url={url}
              apiFinished={apiDone}
              onAnimationComplete={handleAnimationFinish}
            />
          </motion.div>
        ) : (
          /* Interactive Scanner Interface */
          <motion.div
            key="input"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-3xl bg-[#080B12]/80 border border-cyan-500/25 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(0,240,255,0.2)]"
          >
            {/* Top Glowing Beam Accent */}
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleScan();
              }}
              className="space-y-4"
            >
              {/* URL Input Bar */}
              <div className="relative flex flex-col sm:flex-row items-stretch gap-2.5 p-1.5 rounded-2xl bg-slate-950/70 border border-slate-800 focus-within:border-cyan-400/80 focus-within:shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all duration-300">
                <div className="flex items-center pl-4 pr-2 flex-1">
                  <Search className="w-5 h-5 text-cyan-400/70 mr-3 flex-shrink-0" />
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => {
                      setUrl(e.target.value);
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder="https://enter-url-to-scan.com/verify"
                    aria-label="URL to inspect for phishing"
                    className="w-full bg-transparent text-white font-mono text-sm placeholder:text-slate-500 focus:outline-none py-3"
                  />
                  {url && (
                    <button
                      type="button"
                      onClick={() => setUrl('')}
                      className="text-slate-500 hover:text-slate-300 p-1"
                      aria-label="Clear URL"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Scan Action Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all cursor-pointer flex-shrink-0"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>SCAN URL</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Error Message Alert */}
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/30 text-rose-300 text-xs font-mono"
                >
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleScan()}
                    className="underline hover:text-rose-100 uppercase tracking-wider text-[11px]"
                  >
                    TRY AGAIN
                  </button>
                </motion.div>
              )}

              {/* Sample Testing Links */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
                <span className="text-[11px] text-slate-500 uppercase tracking-wider">
                  QUICK TELEMETRY SAMPLES:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {SAMPLE_URLS.map((sample) => (
                    <button
                      key={sample.label}
                      type="button"
                      onClick={() => {
                        setUrl(sample.url);
                        handleScan(sample.url);
                      }}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors text-[11px]"
                    >
                      {sample.label}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
