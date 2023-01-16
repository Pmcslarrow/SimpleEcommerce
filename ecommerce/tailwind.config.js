/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'eggshell' : "#F3E5D7",
      'army' : "#B2AC88",
      "beige" : {
        100: "#faf0e6",
        200: "#fff0db",
        300: "#eed9c4",
        400: "#e4d5b7",
        500: "#d9b99b"
      },
      "bright-orange" : "#ce5c08"
    }
  },
  plugins: [],
}