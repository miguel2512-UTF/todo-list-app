/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        remove: {
          "100%": {
            transform: "translateX(100px)",
            opacity: 0
          }
        }
      },
      animation: {
        remove: "remove .5s ease-in-out normal"
      }
    },
    screens: {
      "mobile": "200px",
      "desktop": "1280px"
    }
  },
  plugins: [],
}

