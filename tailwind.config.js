module.exports = {
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    content: ['./public/index.html', './src/**/*.svelte'],
    options: {
      defaultExtractor: content => [...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []), ...(content.match(/(?<=class:)[^=>\/\s]*/g) || [])],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        128: '32rem',
      },
      screens: {
        tablet: '440px',
      },
      colors: {
        black: {
          900: '#22252d',
          800: '#292d36',
          700: '#272b33',
        },
        green: {
          special: '#25f5d0',
        },
        red: {
          special: '#ec6666',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
