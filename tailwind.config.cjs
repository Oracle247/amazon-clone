module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  fontFamily: {
    montserrat: ['Montserrat', 'sans-serif'],
    inter: ['Inter', 'sans-serif'],
    asap: ['Asap', 'sans-serif'],
    amazonember: ["Amazon Ember", 'sans-serif']
  },

  plugins: [require("daisyui")],
};
