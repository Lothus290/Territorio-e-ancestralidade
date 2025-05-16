/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        earth: {
          100: '#F5EFE7',
          200: '#E8D5C4',
          300: '#D0B49F',
          400: '#B89F8D',
          500: '#8B5A3C',
          600: '#6D4534',
          700: '#5A3A2A',
          800: '#422D23',
          900: '#2E211A',
        },
        forest: {
          100: '#E8F1E8',
          200: '#C7E0C8',
          300: '#A6C9A8',
          400: '#84B387',
          500: '#2C5530',
          600: '#254328',
          700: '#1E3620',
          800: '#162918',
          900: '#0F1E10',
        },
        terracotta: {
          100: '#F9E7E1',
          200: '#F2C7B6',
          300: '#E9A38A',
          400: '#DF7E5D',
          500: '#C35831',
          600: '#9B4728',
          700: '#82391F',
          800: '#652C17',
          900: '#491F10',
        },
        spirit: {
          100: '#EEEAF4',
          200: '#D4CBE4',
          300: '#B9ABD3',
          400: '#9E8BC3',
          500: '#614B79',
          600: '#4D3C61',
          700: '#3A2D4A',
          800: '#281E32',
          900: '#150F1B',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Garamond', 'serif'],
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-in-slow': 'fadeIn 2s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};