import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CyberBackground3D } from './components/CyberBackground3D';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { UrlScanner } from './components/UrlScanner';
import { StatsCards } from './components/StatsCards';
import { HistoryTable } from './components/HistoryTable';
import { AboutModal } from './components/AboutModal';
import { PredictionDetailResponse, PredictionResponse } from './types';
import { api } from './services/api';
import { Shield, Activity, ArrowUpRight } from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'scanner' | 'dashboard' | 'history'>('scanner');
  const [threatMode, setThreatMode] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Scan History state
  const [historyItems, setHistoryItems] = useState<PredictionDetailResponse[]>([]);
  const [historyTotal, setHistoryTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isHistoryLoading, setIsHistoryLoading] = useState(false);

  const loadHistory = async (page: number = 1) => {
    setIsHistoryLoading(true);
    try {
      const data = await api.getHistory(page, 15);
      setHistoryItems(data.items);
      setHistoryTotal(data.total);
      setCurrentPage(data.page);
    } catch (err) {
      console.warn('Failed to load history:', err);
    } finally {
      setIsHistoryLoading(false);
    }
  };

  useEffect(() => {
    loadHistory(1);
  }, []);

  const handleScanCompleted = (res: PredictionResponse) => {
    // If threat detected, activate ambient threat mode in 3D scene
    setThreatMode(res.prediction === 'Phishing');
    // Reload history to include the new scan
    loadHistory(currentPage);
  };

  return (
    <div className="relative min-h-screen bg-[#05070D] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 3D Cyber Security Environment */}
      <CyberBackground3D threatMode={threatMode} />

      {/* Floating Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(t) => setActiveTab(t as any)}
        onOpenAbout={() => setIsAboutOpen(true)}
      />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <AnimatePresence mode="wait">
          {activeTab === 'scanner' && (
            <motion.div
              key="scanner-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col items-center"
            >
              <Hero />
              <UrlScanner
                onScanCompleted={handleScanCompleted}
                onThreatDetected={setThreatMode}
              />

              {/* Quick Live Audit Highlights beneath Scanner */}
              {historyItems.length > 0 && (
                <div className="w-full max-w-4xl mt-10 pt-8 border-t border-slate-800/80">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400 tracking-wider flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 text-cyan-400" />
                      RECENT INTERCEPTIONS
                    </span>
                    <button
                      onClick={() => setActiveTab('history')}
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                    >
                      <span>View All History</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {historyItems.slice(0, 3).map((item) => {
                      const isPhish = item.prediction === 'Phishing';
                      return (
                        <div
                          key={item.id}
                          className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span
                              className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold border ${
                                isPhish
                                  ? 'bg-rose-500/15 border-rose-500/40 text-rose-300'
                                  : 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                              }`}
                            >
                              {item.prediction}
                            </span>
                            <span className="text-[11px] font-mono text-slate-400">
                              {(item.probability * 100).toFixed(1)}%
                            </span>
                          </div>
                          <div
                            className="text-xs font-mono text-slate-300 truncate"
                            title={item.url}
                          >
                            {item.url}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'dashboard' && (
            <motion.div
              key="dashboard-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="w-full pt-28 space-y-8"
            >
              <div>
                <h2 className="text-3xl font-extrabold font-mono text-white tracking-tight">
                  CYBERSECURITY COMMAND CENTER
                </h2>
                <p className="text-xs font-mono text-cyan-400 mt-1">
                  Real-time threat landscape analytics &bull; XGBoost Model Telemetry
                </p>
              </div>

              {/* Stats Overview Cards */}
              <StatsCards
                historyItems={historyItems}
                totalScansCount={historyTotal}
              />

              {/* Quick Scanner Embedded in Dashboard */}
              <div className="pt-4">
                <UrlScanner
                  onScanCompleted={handleScanCompleted}
                  onThreatDetected={setThreatMode}
                />
              </div>

              {/* Historical Telemetry Summary */}
              <HistoryTable
                items={historyItems}
                total={historyTotal}
                currentPage={currentPage}
                pageSize={15}
                onPageChange={(page) => loadHistory(page)}
                isLoading={isHistoryLoading}
              />
            </motion.div>
          )}

          {activeTab === 'history' && (
            <motion.div
              key="history-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="w-full pt-28 space-y-6"
            >
              <div>
                <h2 className="text-3xl font-extrabold font-mono text-white tracking-tight">
                  CLASSIFICATION AUDIT LOGS
                </h2>
                <p className="text-xs font-mono text-cyan-400 mt-1">
                  Full persistence audit trail queried from SQLite / PostgreSQL backend
                </p>
              </div>

              <HistoryTable
                items={historyItems}
                total={historyTotal}
                currentPage={currentPage}
                pageSize={15}
                onPageChange={(page) => loadHistory(page)}
                isLoading={isHistoryLoading}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* System Architecture Modal */}
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />

      {/* Persistent Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-[#05070D]/90 backdrop-blur-md py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-400 font-semibold">PHISHGUARD AI</span>
            <span>&bull; Powered by XGBoost on PhiUSIIL (235k samples)</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Zero Network Crawl / SSRF Immune</span>
            <button
              onClick={() => setIsAboutOpen(true)}
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              View System Specs
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
