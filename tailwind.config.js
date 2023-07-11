/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        narnoor: ['Narnoor', 'serif']
      },
      colors: {
        'redTax': '#FE0000',
        'orangeTax': '#FBBE2F',
        'brownTax': '#AE8C8A',
        'blueTax': '#4AB1DA',
        'grayTax': '#9C9C9C',
        'greenTax': '#2FBD8D'
      }
    },
  },
  plugins: [],
}

