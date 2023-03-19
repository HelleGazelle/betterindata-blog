const colors = require('tailwindcss/colors')

module.exports = {
  content: ['layouts/**/*.html'],
  media: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      purple: {
        500: "#5D3891",
        900: "#4c2e76"
      },
      gray: colors.gray,
      violet: {
        500: "#E384FF"
      },
      transparent: colors.transparent,
      black: "#191825",
      orange: {
        400: "#faa53c",
        500: "#F99417",
        600: "#ea580c",
        800: "#c2410c"
      },
      pink: colors.pink
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}