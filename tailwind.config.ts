import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", "[data-mode=\"dark\"]"],
  theme: {
    colors: {
      // Red
      "prime": "#D92E15",
      "prime-dark": "#C62A13",
      "prime-mid": "#FFD7D3",
      "prime-light": "#FFE6E3",
      // Black
      dark: "#1D242F",
      gray: "#6C7178",
      "gray-str": "#E2E3E4",
      hover: "#E5E5EC",
      "gray-sec": "#F3F3F5",
      light: "#fff",
      warning: "#FFA755",
      success: "#36B82C"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
