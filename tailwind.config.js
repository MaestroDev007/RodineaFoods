/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: ["#2e6f40","#2B3E34"],
      },

      screens: {
        xs: "340px",
        sm: "576px",
        md: "768px",
        lg: "998px",
        xl: "1200px"
      }
    },
  },
  plugins: [],
};

