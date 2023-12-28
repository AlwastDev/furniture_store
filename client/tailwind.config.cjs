/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#F1F1F1',
        purple: '#7E33E0',
        blueLight: '#3F509E',
        darkBlue: '#0D0E43',
        grayLight: '#8A8FB9',
        gray: '#E7E6EF',
        pink: '#FB2E86',
      },
    },
  },
  plugins: [],
};
