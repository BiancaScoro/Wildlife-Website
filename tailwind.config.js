/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#EAE9E5",
        "beige": "#9F8E63",
        "green-brown": "#433C22",
        "golden": "#CCAD40",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        mallanna: ["Mallanna", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      sm: "606px",
      md: "800px",
      lg: "1000px",
    },
  },
  plugins: [],
};