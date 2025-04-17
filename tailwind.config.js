/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        crtBg: '#0f0f0f',
        crtText: '#00ffcc'
      },
      fontFamily: {
        mono: ['Courier New', 'monospace']
      }
    }
  },
  plugins: []
}
