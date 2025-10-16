
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.js", "./src/app/**/*.{js,jsx,ts,tsx}"],


  presets: [require('nativewind/preset')],
  theme: {
    extend: {
       colors: {
        primary: '#101B53',
        secondary: '#63D6DD',
        black: '#000000',
        white: '#FFFFFF',
    }
    },
  },
  plugins: [],
};
