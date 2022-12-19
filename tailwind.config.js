/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      monst: ["'Montserrat'", "sans-serif"],
      sans: ["'Josefin Sans'", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      purple: colors.purple,
      cyan: colors.cyan,
      emerald: colors.emerald,
      sky: colors.sky,
      rose: colors.rose,
      zinc: colors.zinc,
      boki: "#efd2ff",
    },
    extend: {},
  },
  plugins: [],
};
