module.exports = {
    content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          dark : '#202430',
          medium : '#3A4151',
          white : '#FBFBFB',
          rose : 'bg-gradient-to-br from-[#FFD162] to-[#FF99C3]',
          green : 'bg-gradient-to-br from-[#3EF3E8] to-[#F5FFA0]',
          blue : 'bg-gradient-to-br from-[#FFD162] via-[#3EE4E8] via-[#3B85E6] to-[#3EF3E8]',
        },
        fontFamily: {
          font : ['Poppins']
        }
      },
    },
    plugins: [],
  };