/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens: {
            phone: "480px",
            tablet: "768px",
            pc: "1024px",
        },
    },
  },
  plugins: [],
};
