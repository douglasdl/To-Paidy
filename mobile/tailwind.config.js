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
          bg: '#F6F8FA',
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

