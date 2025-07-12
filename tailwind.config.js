/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'script': ['Dancing Script', 'cursive'],
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'hindi': ['Noto Sans Devanagari', 'sans-serif'],
        'arabic': ['Noto Sans Arabic', 'sans-serif'],
        'chinese': ['Noto Sans SC', 'sans-serif'],
      },
      colors: {
        // Indian Theme
        'indian': {
          primary: '#D4AF37',
          secondary: '#8B0000',
          accent: '#FF6B35',
          background: '#FFF8DC',
          text: '#2C1810'
        },
        // East Asian Theme
        'asian': {
          primary: '#DC143C',
          secondary: '#FFD700',
          accent: '#000000',
          background: '#FFFEF7',
          text: '#2C2C2C'
        },
        // African Theme
        'african': {
          primary: '#FF8C00',
          secondary: '#8B4513',
          accent: '#228B22',
          background: '#FFF8DC',
          text: '#2F4F4F'
        },
        // Island Theme
        'island': {
          primary: '#FF7F50',
          secondary: '#20B2AA',
          accent: '#FFD700',
          background: '#F0F8FF',
          text: '#2F4F4F'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'mandala': 'rotate 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}