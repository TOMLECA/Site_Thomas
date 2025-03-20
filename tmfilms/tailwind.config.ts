import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#f5f5dc",
        black: "#000000",
        red: {
          DEFAULT: "#ff0000",
          500: "#ff0000",
        },
        blue: "#0000ff",
        yellow: "#ffff00",
      },
    },
  },
  plugins: [],
};

export default config; 