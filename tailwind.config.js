/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      none: '0',
      DEFAULT: '0',
      sm: '2px',
      full: '9999px',
    },
    extend: {
      colors: {
        pine: {
          DEFAULT: '#12302A',
          ink: '#0A1F1A',
        },
        needle: {
          DEFAULT: '#2A5A4A',
          ink: '#1E4236',
        },
        sand: {
          DEFAULT: '#E8DED0',
          ink: '#6B5F52',
        },
        chalk: {
          DEFAULT: '#F5F2ED',
          ink: '#3D3A36',
        },
        sky: {
          DEFAULT: '#6BA4C9',
          ink: '#3A6D8C',
        },
        flag: {
          DEFAULT: '#D94F2B',
          ink: '#A13B20',
        },
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
