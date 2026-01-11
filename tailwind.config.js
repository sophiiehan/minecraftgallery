/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson : '#75312A',
        appleRed : '#DF7369',
        appleGreen : '#C2E7A4',
      },
      fontFamily: {
        'Monea': ["Monea", "sans-serif"],
        "Quicksand": ["Quicksand", "sans-serif"]
      },
      keyframes: {
        expandIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        capsuleGrow: {
          '0%': { opacity: '0', transform: 'scaleX(0)' },
          '100%': { opacity: '1', transform: 'scaleX(1)' },
        },
        collapseIn: {
          '0%': { opacity: '0', transform: 'scale(1.1)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        expandIn: 'expandIn 0.4s ease-out',
        capsuleGrow: 'capsuleGrow 0.5s ease-out',
        collapseIn: 'collapseIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
}

