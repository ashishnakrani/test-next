const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    extend: {
      colors: {
        lightgray: {
          "current": '#ededf8',
          "darkgray": '#bcc0c7',
        },
        pink: {
          "current": '#ff6d6c',
          "500": '#f0acac',
        },
        blue: {
          "current": '#0f123f',
        },
        gray: {
          "current": '#ededf8',
        },
      },
      width:{
          "scrollbarline": '700px',
      },
    },
  },
  plugins: [],
}
