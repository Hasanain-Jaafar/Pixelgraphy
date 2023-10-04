/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Kanit': ['"Kanit"','sans-serif'],
        'Poppins': ['"Poppins"','sans-serif'],
      }
    }
  },
  plugins: [],
}

