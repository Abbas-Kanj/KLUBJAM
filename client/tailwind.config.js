/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
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
    function ({ addUtilities }) {
      addUtilities({
        ".sequencer": {
          "@apply grid grid-cols-16 gap-2 w-full": {},
        },
        ".note": {
          "@apply bg-gray-300 text-xs md:text-base w-14 h-14 md:w-14 md:h-14 border border-gray-300 rounded-lg flex justify-center items-center":
            {},
        },
        ".active": {
          "@apply bg-purple-600 border border-purple-600": {},
        },
        ".first-beat-of-the-bar": {
          "@apply bg-primary border border-primary": {},
        },
        ".bpm-controls": {
          "@apply flex justify-center items-center mb-4": {},
        },
        ".bpm-controls label": {
          "@apply text-white": {},
        },
        ".beat-indicator": {
          "@apply w-4 h-4 rounded-full bg-gray-500 flex justify-center items-center text-white text-xl mx-auto":
            {},
        },
        ".live": {
          "@apply bg-green-500": {},
        },
      });
    },
  ],
};
