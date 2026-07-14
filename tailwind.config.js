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
        // === DARK PALETTE ===
        "primary": "#adc6ff",
        "secondary": "#ddb7ff",
        "tertiary": "#4cd7f6",
        "surface": "#0f141b",
        "surface-container": "#1b2027",
        "surface-container-low": "#171c23",
        "surface-container-high": "#252a32",
        "surface-container-highest": "#30353d",
        "surface-container-lowest": "#090f15",
        "surface-variant": "#30353d",
        "surface-bright": "#343941",
        "on-surface": "#dee2ec",
        "on-surface-variant": "#c2c6d6",
        "on-primary": "#002e6a",
        "on-primary-fixed": "#001a42",
        "primary-container": "#4d8eff",
        "primary-fixed": "#d8e2ff",
        "primary-fixed-dim": "#adc6ff",
        "secondary-container": "#6f00be",
        "on-secondary-container": "#d6a9ff",
        "tertiary-container": "#009eb9",
        "outline": "#8c909f",
        "outline-variant": "#424754",
        "background": "#0f141b",
        "on-background": "#dee2ec",
        // === LIGHT PALETTE ===
        "light-bg": "#f0f4ff",
        "light-surface": "#ffffff",
        "light-surface-variant": "#e8eaf6",
        "light-on-surface": "#1a1e2e",
        "light-on-surface-variant": "#44475a",
        "light-outline": "#c5c8d6",
        "light-primary": "#1a56c4",
        "light-secondary": "#7c3aed",
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Manrope', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 12s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'fadeInUp': 'fadeInUp 0.7s ease forwards',
        'typewriter': 'typewriter 3s steps(40) infinite',
        'cursor-blink': 'cursorBlink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(173, 198, 255, 0.2)' },
          '100%': { boxShadow: '0 0 50px rgba(173, 198, 255, 0.5)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    base: false,
    logs: false,
  },
}
