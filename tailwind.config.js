export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'saba-gold': '#c9a34b',
        'saba-black': '#0b0b0b',
        'saba-gray': '#f5f5f7'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        arabic: ['Cairo', 'Noto Naskh Arabic', 'sans-serif']
      }
    },
  },
  plugins: [],
}
