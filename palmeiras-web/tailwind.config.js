/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'palmeiras-green': '#024f28',
        'palmeiras-green-light': '#016837',
        'palmeiras-white': '#FFF',
      },
    },
  },
  plugins: [],
};
