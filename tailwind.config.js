/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        primary: "#ad343e",
        secondary: "#800000",
        light: "#f4f4f4",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        gradient: "linear-gradient(164.42deg, #800000 27.54%, #b22222 94.03%)",
      },
    },
  },
  plugins: [],
};
