import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f7f8f4",
          100: "#e3e7db",
          200: "#d9dfcf",
          300: "#c6ceb6",
          400: "#b3be9f",
          500: "#a1ad87",
          600: "#745d07",
          700: "#5d4b05",
          800: "#463804",
          900: "#2e2503",
          950: "#171301",
        },
        accent: {
          50:  "#fffbe5",
          100: "#fff6c2",
          200: "#ffec85",
          300: "#ffe04d",
          400: "#fed72a",
          500: "#f5c20a",
          600: "#d49d05",
          700: "#a87903",
          800: "#7a5602",
          900: "#523a01",
          950: "#2e1f00",
        },
        forest: {
          50:  "#f4f7eb",
          100: "#e7eed2",
          200: "#d0dca6",
          300: "#b3c474",
          400: "#94aa46",
          500: "#76902f",
          600: "#597f00",
          700: "#486400",
          800: "#3a5000",
          900: "#2c3c00",
          950: "#1a2400",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
