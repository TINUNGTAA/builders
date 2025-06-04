/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        blue: '#1E305E',
        dark_blue: '#0D162A',
        brown: '#CD9F70',
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

    },
  },
  plugins: [],
}