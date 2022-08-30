/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.jsx"],
  theme: {
    colors: {
      'roseywineyred': "#42040e",
      'roseyred': "#f43f5e",
      'roseybg': "#fffcfd",
      'white': "#FFFFFF",
      'black': "#000000",
      'cottonrosey': "#fffafc"
    },
    fontFamily:{
      Barlow: ['Barlow', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
