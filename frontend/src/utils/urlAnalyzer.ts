/**
 * Safe client-side URL parsing and intelligence analysis.
 * Generates structured metadata without inventing fake ML signals.
 */

import { UrlIntelligence } from '../types';

export function calculateEntropy(text: string): number {
  if (!text) return 0;
  const len = text.length;
  const frequencies: Record<string, number> = {};
  for (let i = 0; i < len; i++) {
    const char = text[i];
    frequencies[char] = (frequencies[char] || 0) + 1;
  }
  let entropy = 0;
  for (const char in frequencies) {
    const p = frequencies[char] / len;
    entropy -= p * Math.log2(p);
  }
  return parseFloat(entropy.toFixed(3));
}

export function analyzeUrlStructure(rawUrl: string): UrlIntelligence {
  const trimmed = rawUrl.trim();
  let parsedUrl: URL;

  try {
    const hasScheme = /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(trimmed);
    parsedUrl = new URL(hasScheme ? trimmed : `http://${trimmed}`);
  } catch {
    return {
      protocol: 'unknown',
      hostname: trimmed.split('/')[0] || 'invalid',
      domain: 'invalid',
      subdomainCount: 0,
      tld: 'none',
      path: '/',
      queryParamCount: 0,
      urlLength: trimmed.length,
      hasIpAddress: false,
      isHttps: false,
      entropy: calculateEntropy(trimmed),
      specialCharCount: (trimmed.match(/[^a-zA-Z0-9]/g) || []).length
    };
  }

  const hostname = parsedUrl.hostname.toLowerCase();
  const isHttps = parsedUrl.protocol.toLowerCase() === 'https:';

  // IPv4 detection regex
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  const hasIpAddress = ipv4Regex.test(hostname) || hostname.startsWith('[') && hostname.endsWith(']');

  // Split domain into components
  const parts = hostname.split('.');
  const tld = parts.length > 1 ? parts[parts.length - 1] : '';
  const filteredParts = parts.filter(p => p !== 'www');
  const subdomainCount = hasIpAddress ? 0 : Math.max(0, filteredParts.length - 2);
  const domain = hasIpAddress ? hostname : (parts.length >= 2 ? parts.slice(-2).join('.') : hostname);

  const queryParams = Array.from(parsedUrl.searchParams.keys());

  return {
    protocol: parsedUrl.protocol.replace(':', '').toUpperCase(),
    hostname,
    domain,
    subdomainCount,
    tld,
    path: parsedUrl.pathname || '/',
    queryParamCount: queryParams.length,
    urlLength: trimmed.length,
    hasIpAddress,
    isHttps,
    entropy: calculateEntropy(trimmed),
    specialCharCount: (trimmed.match(/[^a-zA-Z0-9]/g) || []).length
  };
}

export function truncateUrl(url: string, maxLength: number = 48): string {
  if (!url) return '';
  if (url.length <= maxLength) return url;
  const start = url.substring(0, Math.floor(maxLength * 0.65));
  const end = url.substring(url.length - Math.floor(maxLength * 0.25));
  return `${start}...${end}`;
}
