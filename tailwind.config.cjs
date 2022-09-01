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
      'roseybtn': "#ffa3c8",
      'buttongreeny': "#d5ded7",
      'buttonreddy': "#e2b8b7"
    },
    fontFamily:{
      Barlow: ['Barlow', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
