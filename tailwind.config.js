/** @type {import('tailwindcss').Config} */
export default{
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, transparent, rgba(0, 0, 0, 1))',
      },
      fontFamily: {
        monsier : ["Monsieur La Doulaise", 'cursive'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        neonGreen: '#ccf32f',
        blueGrey: '#0e3d4d',
      },
      spacing: {
        '97': '27.25rem',
        '98': '28.25rem',
        '99': '32.188rem',
        '100': '33.813rem',
        '101': '51.25rem',
      }
    },
  },
  plugins: [],
}