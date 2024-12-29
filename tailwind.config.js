/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': 'url("../assets/images/websiteBanner.jpeg")',
        'sludgePond' : 'url("./assets/sludge_ponds2.jpeg")',
      }
    },
  },
  plugins: [],
}

