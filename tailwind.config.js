const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/components/**/*.{js,ts,jsx,tsx}",
    "./lib/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      noBackdropFilterSupport: { raw: "@supports (display: flex)" },
      small: "375px",
      medium: "768px",
      large: "1280px",
    },
    fontFamily: {
      rubik: ["Rubik", "sans"],
      overpass: ["Overpass", "sans-serif"],
    },
    colors: {
      green: "#4ae290",
      black: "#000000",
      white: "#ffffff",
      amethyst: "#7b61ff",
      "gray-300": "#f0f0f0",
      "gray-400": "#eeeeee",
      "gray-500": "#cccccc",
      "gray-900": "#333333",
    },
    text: {},
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant(
        "supports-backdrop-filter",
        "@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))"
      );
    }),
  ],
};
