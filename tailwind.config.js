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
        solid: "#fff7e5",
        gradient: "linear-gradient(to top, #d9afd9 0%, #884D80 100%)",
        gradientSecondary: "linear-gradient(to top, #A8BFFF 0%, #884D80 100%)",
        colorPrimary: "#FFA07A",
        colorSecondary: "#98cd98",
      },
      colors: {
        solid: "#fff7e5",
        colorSolid: "#333333",
        colorSecondary: "#98cd98",
        colorPrimary: "#333333",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
