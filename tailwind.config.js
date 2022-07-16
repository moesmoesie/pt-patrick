const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/components/**/*.{js,ts,jsx,tsx}",
    "./lib/modules/**/*.{js,ts,jsx,tsx}",
    "./lib/sanity/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    dropShadow: {
      "shadow-light": [
        "0px 10px 10px rgba(19, 19, 22, 0.08)",
        "0px 16px 32px rgba(0, 0, 0, 0.08)",
        "0px 32px 64px rgba(0, 0, 0, 0.04)",
      ],
    },
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
