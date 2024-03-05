/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      tomato: '#ff6257',
      darkSlate: '#242742',
      charcoal: '#36384e',
      grey: '#9294a0',
      },
      fontFamily: {
        roboto : ['Roboto'],
      }
    },
  },
  plugins: [],
}

