const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    backgroundColor: {
      dark1: '#4d4646',
      dark2: '#5b5656',
      gr: '#7fcd91',
      bright1: '#f5eaea',
    },
    textColor: {
      dark1: '#4d4646',
      dark2: '#5b5656',
      gr: '#7fcd91',
      bright1: '#f5eaea',
    },
    colors: {
      gray: colors.trueGray,
    },
    extend: {},
  },
  variants: {
    extend: {
      textOpacity: ['dark'],
    },
  },
  plugins: [],
}
