// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {
      colors: {
        credd: {
          primaryFrom: "#9DD329",
          primaryTo:   "#2D8113",
          neon:        "#AEFF00"
        }
      },
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};
