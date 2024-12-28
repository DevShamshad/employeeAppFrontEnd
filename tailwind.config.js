/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./components/**/**/*.{js,jsx,ts,tsx}", // add this line
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        red: '#ef4444', 
        green:"#22c55e",
        blue:"#3b82f6",
        yellow:"#eab308",
        orange:"#f97316",
        purple:"#a855f7",
        pink:"#ec4899",
        gray:"#6b7280",
        black:"#010000 ",
        white:"#ffffff",
        emerald:"#10b981"

      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}


