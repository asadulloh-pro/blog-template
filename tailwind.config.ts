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
      prime: "#D92E15",
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
      success: "#36B82C",
    },
    extend: {
      boxShadow: {
        button: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        "button-primary-active":
          "0px 0px 0px 4px rgba(255, 87, 51, 0.05), 0px 1px 2px 0px rgba(255, 87, 51, 0.05)",
        "button-default-active":
          "0px 0px 0px 4px #F2F4F5, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        "slider-button": "0px 4px 15px 0px rgba(0, 0, 0, 0.04)",
      },
      lineClamp: {
        1: 1,
        2: 2,
        3: 3,
      },
    },
  },
  plugins: [],
};
export default config;
