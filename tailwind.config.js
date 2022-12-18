/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      monst: ["'Montserrat'", "sans-serif"],
      sans: ["'Josefin Sans'", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
