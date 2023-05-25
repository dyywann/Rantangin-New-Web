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
      },
      backgroundImage: {
        'home' : "url('/public/asset/hero-home.jpg')",
      }
    }
  },
  plugins: [
    require('flowbite/plugin') 
  ],
}

