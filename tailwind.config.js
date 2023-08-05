/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 0%)",
        Overlay: "rgba(0, 0, 0, 0.5)",
        Overlay2: "rgba(0, 0, 0, 0.2)",
        shadow1: "inset 5em 1em gold",
        darkGray: "hsl(0, 0%, 55%)",
        veryDarkGray: "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      transitionDuration: {
        1500: "1.5s",
        2000: "2s",
        2500: "2.5s",
        3000: "3s",
      },
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
