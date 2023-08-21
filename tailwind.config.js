/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "center": "0px 0px 50px 0px rgba(0, 172, 193, 0.25)"
      },
      borderRadius: {
        "100": "100%"
      },
      width: {
        "100": "30rem"
      },
      height: {
        "100": "30rem"
      },
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