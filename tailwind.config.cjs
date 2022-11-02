/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#D2ECFF',
        'secondary': '#134562',
        'dark': '#121212',
      },
      fontFamily: {
        'sans': ['Merriweather Sans', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}
