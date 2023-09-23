/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'imgHome': "url('/src/assets/homePage/pictureHome.jpg')",
        'imgContact': "url('/src/assets/homePage/multicolor-background.jpg')",
      },
      fontFamily: {
        'WorkSans': ['WORKSANS', 'cursive'],
        'Banana': ['BANANA'],
      }
    },
  },
  plugins: [],
}

