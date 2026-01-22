
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constants.ts"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        blue: {
          500: '#3b82f6',
          600: '#2563eb',
          900: '#1e3a8a',
          950: '#172554',
        }
      },
    },
  },
  plugins: [],
}
