/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#323232",
        dark: "#0f172a",
      },
      dropShadow: {
        putih: "0 0 10px rgba(255, 255, 255, 0.5)",
        shaprim: "0 4px 6px -1px rgba(50, 50, 50, 0.5)",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
