const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    backgroundColor: {
      dark1: '#222831',
      dark2: '#393e46',
      point: '#00adb5',
      bright1: '#eeeeee',
    },
    textColor: {
      dark1: '#222831',
      dark2: '#393e46',
      point: '#00adb5',
      bright1: '#eeeeee',
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
