/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        better_vcr: ['better_vcr', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

