/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sepia: {
          50: '#FCF9F5',
          100: '#F8F1E9',
          200: '#F1E3D3',
          300: '#E9D5BD',
          400: '#E2C7A7',
          500: '#DAB991',
          600: '#D2AB7B',
          700: '#C99D65',
          800: '#C18F4F',
          900: '#B98139'
        },
        vintage: {
          50: '#F9F7F4',
          100: '#F2EEE8',
          200: '#E5DDD1',
          300: '#D8CCBA',
          400: '#CBBBA3',
          500: '#BEAA8C',
          600: '#B19975',
          700: '#A4885E',
          800: '#977747',
          900: '#8A6630'
        },
        warm: {
          50: '#FDF8F3',
          100: '#FBF1E7',
          200: '#F7E3CF',
          300: '#F3D5B7',
          400: '#EFC79F',
          500: '#EBB987',
          600: '#E7AB6F',
          700: '#E39D57',
          800: '#DF8F3F',
          900: '#DB8127'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};