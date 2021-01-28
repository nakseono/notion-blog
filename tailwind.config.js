const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
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
