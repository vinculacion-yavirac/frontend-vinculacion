/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        20: "repeat(20, minmax(0, 1fr))",
      },
    },
  },
  daisyui: {
    themes: ["garden"],
  },
  plugins: [require("daisyui")],
}
