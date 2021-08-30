module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      primary: ['Poppins', 'ui-sans-serif'],
      secondary: ['Azeret Mono', 'ui-monospace']
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
