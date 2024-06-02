/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    typography: {
      DEFAULT: {
        css: {
          '*, ::before, ::after': { 'font-feature-settings': '"liga" on, "kern" on' },
        },
      },
    },
    extend: {
      fontFamily: {
        defont: ['Poppins', 'sans-serif'],
        cursive: ['Pacifico', 'cursive'],
      },
    },
  },
}
