/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-test': '#FF238D',
        'gray-text': '#8E9CBB',
        'gray-border': '#D3D8DF',
        'blue-icon': '#0066FF',
        'lightblue-icon': '#00C2FF',
        'yellow-icon': '#FFB800',
        'orange-icon': '#FF8D23'
      },
      backgroundColor: {
        'pink-test': '#FF238D',
        'gray-text': '#8E9CBB',
        'gray-border': '#D3D8DF',
        'blue-icon': '#0066FF',
        'lightblue-icon': '#00C2FF',
        'yellow-icon': '#FFB800',
        'orange-icon': '#FF8D23'
      }
    }
  },
  plugins: [],
  safelist: [
    'pink-test',
    'gray-text',
    'gray-border',
    'blue-icon',
    'lightblue-icon',
    'yellow-icon',
    'orange-icon'
  ]
}
