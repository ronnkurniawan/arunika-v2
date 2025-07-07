/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rader: ['RaderBold', 'sans-serif'],
        formula: ['FormulaRegular', 'sans-serif'],
        supply: ['SupplyMono', 'monospace'],
      },
    },
  },
  plugins: [],
}

