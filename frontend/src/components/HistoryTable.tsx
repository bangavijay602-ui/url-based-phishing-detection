import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  History,
  Search,
  Copy,
  Check,
  ShieldAlert,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { PredictionDetailResponse } from '../types';
import { truncateUrl } from '../utils/urlAnalyzer';

interface HistoryTableProps {
  items: PredictionDetailResponse[];
  total: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (newPage: number) => void;
  isLoading?: boolean;
}

export const HistoryTable: React.FC<HistoryTableProps> = ({
  items,
  total,
  currentPage,
  pageSize,
  onPageChange,
  isLoading = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'All' | 'Phishing' | 'Legitimate'>('All');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const copyUrl = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  // Filter items based on search and status
  const filteredItems = items.filter((item) => {
    const matchesSearch = item.url.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === 'All' ? true : item.prediction === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div className="w-full rounded-2xl bg-[#080B12]/80 border border-slate-800/80 p-6 backdrop-blur-xl shadow-xl">
      {/* Title & Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2.5">
          <History className="w-5 h-5 text-cyan-400" />
          <div>
            <h3 className="text-base font-mono font-bold text-white tracking-wide">
              HISTORICAL TELEMETRY LOGS
            </h3>
            <p className="text-xs font-mono text-slate-400">
              {total} verified classification events stored in database
            </p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Search Box */}
          <div className="relative flex items-center bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 focus-within:border-cyan-400 text-xs font-mono">
            <Search className="w-3.5 h-3.5 text-slate-400 mr-2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter by URL domain..."
              className="bg-transparent text-white placeholder:text-slate-500 focus:outline-none w-40 sm:w-52"
            />
          </div>

          {/* Status Filter Dropdown */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs font-mono">
            {(['All', 'Phishing', 'Legitimate'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-2.5 py-1 rounded-lg transition-colors text-[11px] font-semibold ${
                  filterStatus === status
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table Data */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs font-mono">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-[11px] uppercase tracking-wider">
              <th className="pb-3 pl-3 font-semibold">TARGET URL</th>
              <th className="pb-3 px-3 font-semibold">VERDICT</th>
              <th className="pb-3 px-3 font-semibold">PREDICTED PROBABILITY</th>
              <th className="pb-3 px-3 font-semibold">RISK LEVEL</th>
              <th className="pb-3 px-3 font-semibold">LATENCY</th>
              <th className="pb-3 pr-3 font-semibold">TIMESTAMP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {filteredItems.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-12 text-center text-slate-500 font-mono">
                  {isLoading
                    ? 'Fetching audit trail from database...'
                    : 'No telemetry records match the current filter criteria.'}
                </td>
              </tr>
            ) : (
              filteredItems.map((item, idx) => {
                const isPhishing = item.prediction === 'Phishing';
                const createdDate = item.created_at
                  ? new Date(item.created_at).toLocaleString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })
                  : 'Recent';

                return (
                  <motion.tr
                    key={item.id || idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: idx * 0.02 }}
                    className="hover:bg-slate-800/40 transition-colors group"
                  >
                    {/* URL with Tooltip and Copy */}
                    <td className="py-3.5 pl-3 max-w-xs sm:max-w-md">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => copyUrl(item.id, item.url)}
                          className="text-slate-500 hover:text-cyan-300 opacity-60 group-hover:opacity-100 transition-opacity p-1"
                          title="Copy Full URL"
                        >
                          {copiedId === item.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <span
                          className="text-slate-200 truncate font-mono text-xs hover:text-white"
                          title={item.url}
                        >
                          {truncateUrl(item.url, 44)}
                        </span>
                      </div>
                    </td>

                    {/* Prediction Status Badge */}
                    <td className="py-3.5 px-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase border ${
                          isPhishing
                            ? 'bg-rose-500/15 border-rose-500/40 text-rose-300 shadow-[0_0_10px_rgba(244,63,94,0.15)]'
                            : 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                        }`}
                      >
                        {isPhishing ? (
                          <ShieldAlert className="w-3 h-3 text-rose-400" />
                        ) : (
                          <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        )}
                        <span>{item.prediction}</span>
                      </span>
                    </td>

                    {/* Probability */}
                    <td className="py-3.5 px-3 text-slate-200 font-bold">
                      {(item.probability * 100).toFixed(2)}%
                    </td>

                    {/* Risk */}
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-semibold ${
                            isPhishing ? 'text-rose-400' : 'text-emerald-400'
                          }`}
                        >
                          {item.risk_level}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          ({item.risk_score}/100)
                        </span>
                      </div>
                    </td>

                    {/* Latency */}
                    <td className="py-3.5 px-3 text-slate-400">
                      {item.processing_time_ms ? `${item.processing_time_ms} ms` : '&lt; 1 ms'}
                    </td>

                    {/* Date */}
                    <td className="py-3.5 pr-3 text-slate-500 text-[11px]">
                      {createdDate}
                    </td>
                  </motion.tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-slate-800 pt-4 mt-4 text-xs font-mono text-slate-400">
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage <= 1}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 disabled:opacity-40 hover:border-cyan-500/40 text-slate-300 transition-colors"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 disabled:opacity-40 hover:border-cyan-500/40 text-slate-300 transition-colors"
              aria-label="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
