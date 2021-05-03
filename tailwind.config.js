// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          'primary': '#383838',
          'secondary': '#F3F3F3',
          'light-gray': '#CDCDCD'
        }
      },
      fontFamily: {
        'body': ['Roboto', 'sans-serif']
      },
      opacity: {
        '15': '.15'
      },
      boxShadow: {
        'primary': '0px 2px 8px 3px rgba(56, 56, 56, 0.2)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}