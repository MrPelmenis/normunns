/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "my-gray": "#393E46",
        "my-light": "#DDDDDD",
        "my-cyan": "#00ADB5",
        "my-dark": "222831",
      },
    },
  },
  plugins: [],
}
