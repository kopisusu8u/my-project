/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./src/App.jsx",
    // "./src/index.css",
    // "./src/App.css",
    // "./src/App.js",
    // ".src/main.jsx",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-1': '#fcfcfc',
        'bg-2': '#FDFFD2',
        'bg-3': '#FDFFD2',
        'bg-4': '#FDFFD2',
        'bg-5': '#FDFFD2',
        'bg-6': '#FDFFD2',
      },
      fontFamily: {
        'playwrite': ['Playwrite DE Grund', 'sans-serif']
      }
    },
  },
  plugins: [],
}