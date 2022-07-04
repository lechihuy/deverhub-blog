/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      'sm': '600px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
      colors: {
        'button': '#2563eb',
        'buttonHover': '#1d4ed8',
        'buttonActive': '#1e40af',
        'subText': '#757575'
      },
    },
  },
  plugins: [],

}
