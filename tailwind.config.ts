import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          200: "#D1C3AB",
          300: "#B19C83",
          400: "#937C5F",
          500: "#5B5247",
        },
        graphBorder: "#1B2F49",
        graphBack: "#F5F3EC",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
export default config;
