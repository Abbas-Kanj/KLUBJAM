/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        drop: "0 0 10px 2px #0FACFD",
        black: "0 0 16px 14px #6B1EC8",
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
        backgroundDark: {
          DEFAULT: "#1A1B1F",
        },
        greyText: {
          DEFAULT: "#9D9D9D",
        },
        inputBox: {
          DEFAULT: "#222428",
        },
        tableBackground: {
          DEFAULT: "#3c3c3c",
        },
        tableRow: {
          DEFAULT: "#3c3c3c",
        },
        tableUpdateBtn: {
          DEFAULT: "#00FF66",
        },
        tableSuspendBtn: {
          DEFAULT: "#F55C05",
        },
        tableDeleteBtn: {
          DEFAULT: "#FF0000",
        },
        purple: {
          600: "#600889",
        },
        green: {
          500: "#13E800",
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-animated"),
    require("tailwind-scrollbar")({ preferredStrategy: "pseudoelements" }),
  ],
};
