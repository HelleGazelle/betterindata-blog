const colors = require('tailwindcss/colors')

module.exports = {
  content: ['layouts/**/*.html'],
  media: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      purple: {
        500: "#865DFF",
        900: "#531df4"
      },
      gray: colors.gray,
      violet: {
        500: "#E384FF"
      },
      transparent: colors.transparent,
      black: "#191825",
      pink: {
        400: "#fcb3fa",
        500: "#FFA3FD",
        600: "#f78af3",
        800: "#ef62ea"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}