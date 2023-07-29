/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx", 
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        paidy: {
          bg: '#EEF0F2',
          header: '#FFFFFF',
          logo: '#FF009C',
          logo2: '#9238B5',
          text: '#1C1C1C',
          border: '#EDEEF0',
          shape: '#2A2D31',
          active: '#D23B8A'
        }
      }
    },
  },
  plugins: [],
}

