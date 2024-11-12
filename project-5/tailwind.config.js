/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        richblack: {
          900: '#0c0c0d',
          800: '#1a1a1b',
          700: '#28282a',
        },
        deepBlue: '#000915', 
        lighGray: '#171d29'   
      },
    },
  },
  plugins: [],
}
