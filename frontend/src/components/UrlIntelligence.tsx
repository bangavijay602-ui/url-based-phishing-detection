import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Lock, Unlock, Hash, Compass, ShieldAlert, Cpu, Database } from 'lucide-react';
import { analyzeUrlStructure } from '../utils/urlAnalyzer';

interface UrlIntelligenceProps {
  url: string;
}

export const UrlIntelligence: React.FC<UrlIntelligenceProps> = ({ url }) => {
  const intel = analyzeUrlStructure(url);

  const metrics = [
    {
      label: 'Protocol',
      value: intel.protocol,
      sub: intel.isHttps ? 'Encrypted (TLS/SSL)' : 'Insecure Plaintext',
      icon: intel.isHttps ? Lock : Unlock,
      alert: !intel.isHttps,
      safe: intel.isHttps
    },
    {
      label: 'Apex Domain',
      value: intel.domain,
      sub: intel.tld ? `TLD: .${intel.tld}` : 'No TLD found',
      icon: Globe,
      alert: intel.hasIpAddress,
      safe: !intel.hasIpAddress
    },
    {
      label: 'Subdomain Nesting',
      value: `${intel.subdomainCount}`,
      sub: intel.subdomainCount >= 2 ? 'High nesting anomaly' : 'Normal hierarchy',
      icon: Compass,
      alert: intel.subdomainCount >= 2,
      safe: intel.subdomainCount < 2
    },
    {
      label: 'URL Length',
      value: `${intel.urlLength} chars`,
      sub: intel.urlLength > 75 ? 'Abnormally long URL' : 'Typical length',
      icon: Hash,
      alert: intel.urlLength > 75,
      safe: intel.urlLength <= 75
    },
    {
      label: 'Character Entropy',
      value: `${intel.entropy} bits`,
      sub: intel.entropy > 4.2 ? 'Elevated DGA randomness' : 'Natural language pattern',
      icon: Cpu,
      alert: intel.entropy > 4.2,
      safe: intel.entropy <= 4.2
    },
    {
      label: 'Host Structure',
      value: intel.hasIpAddress ? 'RAW IP ADDRESS' : 'DNS HOSTNAME',
      sub: intel.hasIpAddress ? 'Flagged Host Indicator' : 'Registered Name',
      icon: intel.hasIpAddress ? ShieldAlert : Database,
      alert: intel.hasIpAddress,
      safe: !intel.hasIpAddress
    }
  ];

  return (
    <div className="w-full rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 backdrop-blur-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-cyan-400" />
          <h3 className="text-sm font-mono font-semibold text-white tracking-wide">
            URL INTELLIGENCE &amp; LEXICAL TELEMETRY
          </h3>
        </div>
        <span className="text-[11px] font-mono text-slate-400">
          Path: <code className="text-slate-300 bg-slate-800/60 px-1.5 py-0.5 rounded">{intel.path}</code>
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: idx * 0.05 }}
              className={`p-3 rounded-xl border flex flex-col justify-between ${
                m.alert
                  ? 'bg-rose-950/20 border-rose-500/30'
                  : 'bg-slate-950/40 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  {m.label}
                </span>
                <Icon
                  className={`w-3.5 h-3.5 ${
                    m.alert ? 'text-rose-400' : 'text-cyan-400'
                  }`}
                />
              </div>

              <div>
                <div
                  className={`text-xs font-mono font-bold truncate ${
                    m.alert ? 'text-rose-300' : 'text-slate-100'
                  }`}
                  title={m.value}
                >
                  {m.value}
                </div>
                <div className="text-[10px] text-slate-500 truncate mt-0.5">
                  {m.sub}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
