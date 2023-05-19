/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logoMain: ["Darumadrop One"]
      },

      keyframes:{
        forward: {
          '0%, 100%':{transform: 'translateX(5px)'},
          '50%':{transform: 'translateX(-5px)'},
        }
      },

      animation:{
        forward: 'forward 2s ease-in-out infinite'
      }

    },
  },
  plugins: [],
}

