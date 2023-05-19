/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html, js}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'accent': '#FF9C06',
      'secondary': '#323233',
      'wenge': '#685656', 
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      }
    }
  },
  plugins: [
    require('flowbite/plugin') 
  ],
}

