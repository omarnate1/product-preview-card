/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      fontWeight: {
        medium: 500,
        bold: 700,
      },
      colors: {
        "dark-cyan": "#3c8067",
        cream: "#f2ebe3",
        "very-dark-blue": "#1c232b",
        "dark-grayish-blue": "#6c7289",
      },
    },
  },
  plugins: [],
};
