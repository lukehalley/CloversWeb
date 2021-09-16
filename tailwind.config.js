const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    extend: {
      screens: {
        'xs': '1600px',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      height: {
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '152': '38rem',
        '192': '40rem',
      }
    },
    colors: {
      'transparent': 'rgba(0,0,0,0)',
      'green': '#81ee7a',
      'discord': '#7289da',
      'discord-hover': '#404EED',
      'twitter': '#1DA1F2',
      'twitter-hover': '#1d70c1',
      'transparent': 'transparent',
      'current': 'currentColor',
      'cloverHover': '#5fbd5f',
      'cloverRedHover': 'rgba(255,3,0,0.64)',
      'cloverLightGreen': '#81ee7a',
      'cloverMint': '#00D999',
      'cloverWhite': '#DCF8D7',
      'cloverLightRed': 'rgba(255,3,0,0.9)',
      'cloverLighterGreen': '#2c862c',
      'cloverDarkGreen': '#276227',
      'cloverDarkRed': 'rgb(114,3,0)',
      'cloverBorder': '#81ee7a',
      'black': colors.black,
      'white': colors.white,
      'gray': colors.gray,
      'emerald': colors.emerald,
      'indigo': colors.indigo,
      'yellow': colors.yellow,
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      cursor: ['disabled'],
    },
  }
};
