/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-green-300': '#C5E1A5',
        'dark-blue-500': '#1E3A8A',
        'gray-700': '#374151',
      },
    },
  },
  plugins: [],
}

