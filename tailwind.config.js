/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': {
          DEFAULT: '#76C043',
          bright: '#8ff346',
          dim: 'rgba(118, 192, 67, 0.12)',
          glow: 'rgba(118, 192, 67, 0.35)',
        },
        'stealth': {
          deep: '#060a07',
          dark: '#0a110c',
          surface: '#101c13',
          elevated: '#16261b',
          card: 'rgba(14, 25, 17, 0.78)',
        },
        'coach': {
          canvas: '#f7f6f2',
          surface: '#ffffff',
          dark: '#eeebe3',
          text: '#1c261b',
          muted: '#576553',
          green: '#48a14d',
        },
        'admin': {
          dark: '#0a0f0d',
          surface: '#111814',
          card: '#16201b',
          border: 'rgba(52, 211, 153, 0.18)',
          emerald: '#10b981',
          accent: '#34d399',
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        display: ['Baumans', 'cursive', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
