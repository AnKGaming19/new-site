/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#00f0ff', // Cyberpunk cyan
          dark: '#00a3cc',
        },
        secondary: {
          DEFAULT: '#7000ff', // Deep neon purple
          dark: '#4a00b3',
        },
        dark: {
          900: '#050507', // Almost black
          800: '#0a0a12',
          700: '#12121f',
        }
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.15) 0%, transparent 50%)',
        'grid-pattern': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)"
      }
    },
  },
  plugins: [],
}