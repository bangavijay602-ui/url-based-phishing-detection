/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#05070D',
          surface: '#080B12',
          card: 'rgba(12, 17, 29, 0.75)',
          border: 'rgba(0, 240, 255, 0.12)',
          'border-focus': 'rgba(0, 240, 255, 0.4)',
          cyan: '#00f0ff',
          blue: '#0070f3',
          purple: '#8b5cf6',
          safe: '#00ff88',
          danger: '#ff2a55',
          warning: '#f59e0b',
          muted: '#94a3b8'
        }
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif']
      },
      boxShadow: {
        'neon-cyan': '0 0 25px rgba(0, 240, 255, 0.25), inset 0 0 15px rgba(0, 240, 255, 0.1)',
        'neon-safe': '0 0 25px rgba(0, 255, 136, 0.3), inset 0 0 15px rgba(0, 255, 136, 0.1)',
        'neon-danger': '0 0 30px rgba(255, 42, 85, 0.35), inset 0 0 15px rgba(255, 42, 85, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan-line': 'scan 2s linear infinite',
        'float': 'float 4s ease-in-out infinite'
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    },
  },
  plugins: [],
}
