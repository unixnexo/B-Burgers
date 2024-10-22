/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Bred": "#EF4444",
        "Bblack": "#333333",
      }
    },
  },
  plugins: [],
}