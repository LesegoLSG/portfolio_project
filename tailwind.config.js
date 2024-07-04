/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

    },
    extend: {
      inset: {
        '26': '104px',
      },
      colors: {
        primary: '#008DDA',
        secondary: '#41C9E2',
        accent: '#d5f2f5',
      },
      boxShadow: {
        custom: '0 6px 8px rgba(65, 201, 226, 0.1), 0 1px 3px rgba(65, 201, 226, 1)'
      }
    },
  },
  plugins: [],
  darkMode:"class",
}

