import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: { min: "320px", max: "530px" },
      sm: { min: "531px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1439px" },
      xxl: { min: "1440px", max: "2160px" },
      universal: { min: "1024px" },
    },
    extend: {
      content: {
        emptystr: "",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "url('../app/assets/aboutme-bg.jpg')",
        vintagecargarage: "url('../app/assets/vintage-bg.png')",
        wedu: "url('../app/assets/wedu-bg.png')",
        myprojects: "url('../app/assets/projects-bg.jpg')",
        contact: "url('../app/assets/contact-bg.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["luxury"],
  },
};
export default config;
