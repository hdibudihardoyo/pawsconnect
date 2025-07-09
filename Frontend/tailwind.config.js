// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "480px": "490px",
      },
      height: {
        "613px": "613px",
      },
      fontFamily: {
        "Satoshi-Light": ["Satoshi-Light", ...fontFamily.sans],
        "Satoshi-Regular": ["Satoshi-Regular", ...fontFamily.sans],
        "Satoshi-Medium": ["Satoshi-Medium", ...fontFamily.sans],
        "Satoshi-Bold": ["Satoshi-Bold", ...fontFamily.sans],
        "Satoshi-BoldItalic": ["Satoshi-BoldItalic", ...fontFamily.sans],
        Inter: ["Inter", ...fontFamily.sans],
      },
      colors: {
        primary: "#a367b1",
        secondary: "#0C2D48",
        greyLighter: "#f8f8f8",
        greyLight: "#d9d9d9",
        white: "#ffffff",
        cyan: "#274472",
        violet: "#6664D6",
        purple: "#AFA4C8",
        pink: "#D7B3D7",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a367b1",
          secondary: "#0C2D48",
          greyLighter: "#f8f8f8",
          greyLight: "#d9d9d9",
          white: "#ffffff",
          cyan: "#274472",
          violet: "#6664D6",
          purple: "#AFA4C8",
          pink: "#D7B3D7",
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
