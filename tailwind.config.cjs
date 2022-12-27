/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    plugin(function ({ addBase, theme, addVariant }) {
      // addBase({
      //   h1: { fontSize: theme('fontSize.7xl') },
      //   h2: { fontSize: theme('fontSize.6xl') },
      //   h3: { fontSize: theme('fontSize.3xl') },
      //   h4: { fontSize: theme('fontSize.2xl') },
      //   h6: { fontSize: theme('fontSize.lg') },
      //   h5: { fontSize: theme('fontSize.base') },
      // });
      addVariant('hocus', ['&:hover', '&:focus']);
    }),
  ],
};
