/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
     'background-main':"rgb(93,168,152)",
     'background-grad': 'linear-gradient(90deg, rgba(93,168,152,1) 23%, rgba(200,181,41,1) 96%)',

      },
      height:{
        '300':"300px",
      },
      width:{
        '300':"300px",
      },
      boxShadow:{
        "def":" 0px 0px 10px rgba(255,255,255,0.7),0px 0px 20px rgba(0,0,0,0.7)"
      },
      fontSize:{
        '26':"26px",
      },
      rotate:{
        '1c':'30deg',

      }

    },
  },
  plugins: [],
}

