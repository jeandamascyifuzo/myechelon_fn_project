/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inria: ['Inria Serif', 'serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        lexend: ['Lexend Deca', 'sans-serif'],
        sans: ['PT Serif', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
