/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 6px 5px rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
}
