/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#FFBE98",
        tertiary: "#C8C8C8",
        overall: "#222021",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "white-200": "#A0A0A0",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #93AAAA",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
