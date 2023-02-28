/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width'
    },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
