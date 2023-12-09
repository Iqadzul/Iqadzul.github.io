/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        clifford: '#da373d',
        primary: '#14b8a6',
        dark: '#0f172a',
        second: '#64748b',
      },
      screens: {
        '2xl': '1320px',
      }
    }
  },
  plugins: [],
}

