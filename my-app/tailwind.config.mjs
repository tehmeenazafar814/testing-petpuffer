/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f1ecf0',
        primary: '#c56948',
        secondary: '#c1a063',
        text: '#393939'
      },
      backgroundImage: {
        pinkGradient:
          'linear-gradient(90deg,rgba(249, 125, 91, 1) 0%, rgba(249, 168, 123, 1) 91%)'
      },
      animation: {
        marquee: 'marquee 25s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    }
  },
  plugins: []
}
