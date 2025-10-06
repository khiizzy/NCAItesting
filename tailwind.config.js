/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0051C6',
          blue: '#0051C6',
          azure: '#48A8FF',
        },
        ncai: {
          'deep-blue': '#0051C6',
          'azure': '#48A8FF',
          'cloud': '#EDEFF7',
          'steel': '#BCBFCC',
          'graphite': '#6E7180',
          'arsenic': '#40424D',
          'phantom': '#1E1E24',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'h1': ['64px', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'h2': ['48px', { lineHeight: '1.3', letterSpacing: '0.01em' }],
        'h3': ['32px', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'subheader': ['24px', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'body': ['18px', { lineHeight: '1.7' }],
        'body-sm': ['16px', { lineHeight: '1.6' }],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(72, 168, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(72, 168, 255, 0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
