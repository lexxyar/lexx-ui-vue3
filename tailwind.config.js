module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '97': '25rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderWidth: {
        '3': '3px',
      },
    },
    maxHeight: {
      '3/4': '75%',
      '90screen': '90vh',
      '80screen': '80vh',
      '70screen': '70vh',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
