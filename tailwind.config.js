module.exports = {
  darkMode: 'class',
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
  theme: {
    fontFamily: {
      sans: ['Mohave', 'sans-serif'],
    },
    extend: {
      colors: {
        accent: {
          100: '#D2FF52',
          200: '#a2db00',
          300: '#B6DD47',
        },
        dark: {
          100: '#181818',
          200: '#f5f5f5',
          300: '#717171',
        },
      },
      screens: {
        xs: '575px',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
