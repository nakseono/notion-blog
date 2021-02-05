const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    backgroundColor: {
      bright: '#FFF8E1',
      dark: '#616161',
      gray: '#BDBDBD',
      beige: '#D7CCC8',
      orange: '#FFB74D',
    },
    textColor: {
      bright: '#FFF8E1',
      dark: '#616161',
      gray: '#BDBDBD',
      beige: '#D7CCC8',
      orange: '#FFB74D',
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
