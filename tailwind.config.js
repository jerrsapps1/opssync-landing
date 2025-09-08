/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          from: '#0077FF',
          to: '#00D4D8',
        },
      },
      boxShadow: {
        card: '0 12px 24px -12px rgba(0,0,0,0.18)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #0077FF 0%, #00D4D8 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
