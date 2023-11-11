import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { sm: "480px", md: "768px", lg: "976px", xl: "1440px" },
    extend: {
      color: {
        customRed: {
          light: "#F4A4B3",
          DEFAULT: "#EA526F",
          dark: "#DA1B3E",
        },
        customGreen: {
          light: "#C3DBBD",
          DEFAULT: "#8CBA80",
          dark: "#649F56",
        },
        customBlue: {
          light: "#96CCEE",
          DEFAULT: "#60B2E5",
          dark: "#228FD3",
        },
        customGrey: {
          light: "#68728D",
          DEFAULT: "#353A47",
          dark: "#1A1D23",
        },
      },
    },
  },
  plugins: [],
};
export default config;
