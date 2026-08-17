/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f2',
          100: '#d9eede',
          200: '#b5ddbf',
          300: '#84c496',
          400: '#52a86c',
          500: '#2d8a4e',
          600: '#1f6e3c',
          700: '#1a472a',
          800: '#163b24',
          900: '#13311e',
        },
        gold: {
          50: '#fdf8ec',
          100: '#f9eece',
          200: '#f3dc9c',
          300: '#ecc563',
          400: '#c9a84c',
          500: '#b5923a',
          600: '#9a742e',
          700: '#7d5827',
          800: '#694925',
          900: '#5b3e24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
