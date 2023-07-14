/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      'light',
      'dark',
      'forest',
      'corporate',
      'wireframe',
      'cupcake',
      'retro',
      'aqua',
      'business',
      'black',
      'winter',
      'acid'
    ],
  },
};
