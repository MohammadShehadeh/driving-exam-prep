import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: 'selector',
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
      container: {
        padding: "1rem",
        center: true,
        screens: {
          ...defaultTheme.screens,
          sm: "none",
          md: "none",
        },
      },
    },
  },
  plugins: [],
};

export default config;
