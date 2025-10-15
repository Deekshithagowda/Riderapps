
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.js", "./src/app/**/*.{js,jsx,ts,tsx}"],


  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
