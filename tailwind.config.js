module.exports = {
  content: ['./index.html', './src/**/*.{vue, js}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.2rem',
          sm: '2rem',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        dark: {
          'd-blue': ' hsl(209, 23%, 22%)',
          'vd-blue': 'hsl(207, 26%, 17%)',
        },
        light: {
          'vd-blue': ' hsl(200, 15%, 8%)',
          'd-gray': 'hsl(0, 0%, 52%)',
          'l-gray': 'hsl(0, 0%, 98%)',
        },
      },
    },
  },
  plugins: [],
};
