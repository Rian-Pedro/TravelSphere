/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "center": "0px 0px 50px 0px rgba(118, 156, 158, 0.25)"
      },
      borderRadius: {
        "100": "100%"
      },
      width: {
        "100": "30rem",
        "base": "2rem"
      },
      height: {
        "100": "30rem",
        "base": "2rem",
        "fullplus": "calc(100% + 5rem)",
        "5%": "5%",
        "95%": "95%"
      },
      minWidth: {
        "min-w-2/4": "50%",
      },
      minHeight: {
        "min-h-10": "2.5rem"
      },
      spacing: {
        "fullplus": "210%"
      },
      transitionDuration: {
        "base": ".5s"
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