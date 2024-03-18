/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-color':"#5da5a4",
        'shadowColor':'#d7ebed',
        'position':'hsl(180, 14%, 20%)',
        'textGray':'#939999',
        'dark':'hsl(180, 14%, 20%)',
      }
    },
  },
  plugins: [],
}

