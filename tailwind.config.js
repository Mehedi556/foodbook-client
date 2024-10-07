import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        gradient: "linear-gradient(to top, #d9afd9 0%, #884D80 100%)",
        gradientSecondary: "linear-gradient(to top, #A8BFFF 0%, #884D80 100%)",
      },
      colors: {
        solid: "#884D80",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
