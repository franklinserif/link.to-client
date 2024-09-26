import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        main: "#172755",
        mainDarked: "#0c1736",
        secondary: "#8794BA",
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBlue: "#172755",
        pinkRed: "#EF2A82",
        lightBlue: "#0088F0",
        chartLines: "#EEEEF6",
      },
    },
  },
  plugins: [],
};
export default config;
