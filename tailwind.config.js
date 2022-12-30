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
      egg: { 100: "#f5ebe1", 200: "#a69585", 900: "#877564" },
      stack: {
        react: "#80d8f7",
        next: "#f7f7f7",
        mongo: "#4caa3d",
        node: "#509941",
        tail: "#2fb2a7",
        js: "#e8d44d",
        ts: "#2f74c0",
        se: "#cf0a2c",
      },
    },
    extend: {},
  },
  plugins: [],
};
