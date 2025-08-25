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
      }
    }
  },
  plugins: []
}
