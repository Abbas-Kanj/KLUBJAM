/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        drop: "0 0 30px 0 #0FACFD",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          DEFAULT: "#0FACFD",
        },
        background: {
          DEFAULT: "#0F1117",
        },
        backgroundPurple: {
          DEFAULT: "#6B1EC8",
        },
        greyText: {
          DEFAULT: "#9D9D9D",
        },
        inputBox: {
          DEFAULT: "#222428",
        },
      },
    },
  },
  plugins: [],
};
