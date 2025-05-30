/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { inter: ['Inter', 'sans-serif'] },
      colors: { brand: 'var(--brand)', 'bg-light': 'var(--bg-light)' },
      borderRadius: { DEFAULT: '16px' }
    }
  },
  plugins: []
};
