module.exports = {
  purge: {
    enabled: true,
    content: ['./src/components/**/*.tsx', './pages/**/*.tsx']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      primary: ['Poppins', 'ui-sans-serif'],
      secondary: ['Azeret Mono', 'ui-monospace']
    },
    colors: {
      primary: '#0070f3',
      grey: '#D1D5DB'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
