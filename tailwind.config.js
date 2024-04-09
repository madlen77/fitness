/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'fitness-dark' : '#202430',
        'fitness-medium' : '#3A4151',
        'fitness-white' : '#FBFBFB',
        'fitness-rose' : 'linear-gradient(-45deg, #FF99C3, #FFD162);',
        'fitness-green' : 'linear-gradient(-45deg, #F5FFA0, #3EF3E8);',
        'fitness-blue' : 'linear-gradient(-45deg, #3A4AE4, #3B85E6, #3EE4E8, #3EF3E8)',
      },
      fontSize: {
        'h1': '4.25rem', // Adjust the size as needed
      },
      fontWeight: {
        'h1': 'bold',
      },
      colors: {
        'h1': 'aqua', // Example color
      },
      
    },
  },
  plugins: [],
};
