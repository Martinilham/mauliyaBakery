/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#ffffff',
        },
      },
      fontFamily: {
        mono: ['LiberationMono-Regular', 'sans-serif'],
        monoBold: ['LiberationMono-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}