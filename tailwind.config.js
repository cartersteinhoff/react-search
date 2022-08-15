/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "github-blue": "#0d1117",
        darkBlueGray: "#334254",
        darkGray: "#1e2a3a"
      },
    },
  },
  plugins: [],
};
