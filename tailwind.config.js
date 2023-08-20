/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        "min-w-2/4": "50%"
      },
      colors: {
        blue1: "#00ACC1",
        blue2: "#0D47A1",
        gray1: "#94A0A6",
        yellow1: "#FFC107"
      }
    },
  },
  plugins: [],
}