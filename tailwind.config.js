/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom rgba color
        'black-start': 'rgb(4, 21, 45)',
        // Add other colors as needed
      },
    },
  },
  plugins: [],
}
