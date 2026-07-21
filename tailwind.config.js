/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./templates/**/*.mjs",
    "./build.mjs",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#00f0ff',
          dark: '#00a3cc',
        },
        secondary: {
          DEFAULT: '#7000ff',
          dark: '#4a00b3',
        },
        dark: {
          900: '#050507',
          800: '#0a0a12',
          700: '#12121f',
          600: '#1a1a2b',
        }
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 50% 30%, rgba(0, 240, 255, 0.14) 0%, transparent 55%)',
        'grid-pattern': "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)"
      },
      maxWidth: {
        '8xl': '90rem',
      }
    },
  },
  plugins: [],
}
