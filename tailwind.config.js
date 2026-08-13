/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060A12',
          900: '#090D16',
          850: '#0B1120',
          800: '#0F172A',
          700: '#1E293B',
          600: '#334155',
          500: '#475569',
        },
        gold: {
          300: '#F3E5AB',
          400: '#E6C251',
          500: '#D4AF37',
          600: '#C59B27',
          700: '#9A7815',
          50: '#FAF8F0',
          100: '#F4EFCF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.3)',
        'gold-glow-lg': '0 0 40px -5px rgba(212, 175, 55, 0.45)',
        'navy-card': '0 10px 30px -5px rgba(9, 13, 22, 0.08)',
      }
    },
  },
  plugins: [],
}
