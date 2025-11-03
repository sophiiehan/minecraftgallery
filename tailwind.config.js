/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson : '#75312A'
      },
      fontFamily: {
        'Monea': ["Monea", "sans-serif"],
        "Quicksand": ["Quicksand", "sans-serif"]
      }
    },
  },
  plugins: [],
}

