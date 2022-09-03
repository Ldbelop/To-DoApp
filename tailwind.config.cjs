/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.jsx"],
  theme: {
    colors: {
      'roseywineyred': "#42040e",
      'roseyred': "#f43f5e",
      'roseybg': "#fffcfd",
      'roseycard': "#fff2f6",
      'white': "#FFFFFF",
      'black': "#000000",
      'cottonrosey': "#fffafc",
      'roseybtn': "#fba9b6",
      'buttongreeny': "#aae3c8",
      'buttonreddy': "#fbb2be"
    },
    fontFamily:{
      Barlow: ['Barlow', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
