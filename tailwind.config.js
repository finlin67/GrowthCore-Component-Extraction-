/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Explicitly defining the core palette if customization is needed later,
        // though standard Tailwind colors are currently used.
        slate: {
          950: '#020617', // Main background
          900: '#0f172a', // Card background
        },
        purple: {
          500: '#a855f7', // Primary Brand
        },
        blue: {
          500: '#3b82f6', // Secondary Brand
        }
      }
    },
  },
  plugins: [],
}