/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // ← УБЕДИСЬ, что так!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};