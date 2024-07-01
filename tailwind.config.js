/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          darkest: '#043310',
          dark: '#155526',
          DEFAULT: '#62AA75',
          light: '#62AA75',
          lightest: '#E4FFEB',
        },
        purple: {
          darkest: '#3E2066',
          dark: '#6F4E99',
          DEFAULT: '#AA91CC',
          light: '#AA91CC',
          lightest: '#EFE3FF',
        },
        amber: {
          darkest: '#553915',
          dark: '#AA8B62',
          DEFAULT: '#D7BB98',
          light: '#D7BB98',
          lightest: '#FFF3E3',
        },
      },
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
      },
      fontFamily: {
        'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

