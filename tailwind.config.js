// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ensure this covers your files
  ],
  darkMode: 'class', // Use 'class' strategy for dark mode
  theme: {
    extend: {
      colors: {
        'custom1': '#121825',
        'custom2': '#5FFBF1',
        'custom3': '#89bd5e',
        'custom4': '#ffe26a',
        'custom5': '#b8ccff',
      },
      
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
}


// colors: {
//   'custom1': '#051937',
//   'custom2': '#5FFBF1',
//   'custom3': '#A8EB12',
//   'custom4': '#86A8E7',
//   'custom5': '#c7ddcc',
// },