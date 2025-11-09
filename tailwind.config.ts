import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      colors: {
        primary: {
          50: "#e0f2ff",
          100: "#b2d8ff",
          200: "#80bdff",
          300: "#4da2ff",
          400: "#1a88ff",
          500: "#006fe6",
          600: "#0056b4",
          700: "#003d82",
          800: "#002451",
          900: "#000c21"
        }
      }
    }
  },
  plugins: []
};

export default config;
