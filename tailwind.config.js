/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A2530',        // deep teal-navy background
        ink2: '#0F3542',       // secondary panel
        ink3: '#143F4E',       // lighter panel edge
        cream: '#F1ECDF',      // warm off-white text
        amber: '#E8A33D',      // signature accent
        mint: '#7FE7C4',       // code/success accent
        coral: '#E86A4D',      // warning/alt accent
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'ink-gradient': 'linear-gradient(160deg, #0A2530 0%, #0F3542 45%, #123B49 100%)',
      },
    },
  },
  plugins: [],
}
