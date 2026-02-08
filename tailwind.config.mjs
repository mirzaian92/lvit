import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0B1F33",
          accent: "#F59E0B",
          bg: "#FFFFFF",
          text: "#0F172A",
          border: "#E2E8F0"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11,31,51,0.12)"
      }
    }
  },
  plugins: [typography]
};
