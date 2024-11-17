/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      karla: ['Karla', 'sans-serif'],
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      green: {
        200: 'hsl(148, 38%, 91%)',
        600: 'hsl(169, 82%, 27%)',
      },
      grey: {
        500: 'hsl(186, 15%, 59%)',
        900: 'hsl(187, 24%, 22%)',
      },
      red: 'hsl(0, 66%, 54%)',
    },
  },
  plugins: [],
};

/*
- Mobile: 375px
- Desktop: 1440px
*/
