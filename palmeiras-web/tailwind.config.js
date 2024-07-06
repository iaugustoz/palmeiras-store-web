/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'palmeiras-green': '#014510',
        'palmeiras-white': '#FFF',
      },
    },
  },
  plugins: [],
};
