import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#080d1a",
        panel: "#0f172a",
        blueAccent: "#38bdf8",
        blueHover: "#7dd3fc",
        textLight: "#f8fafc",
        muted: "#94a3b8",
        line: "#1e293b",
        ink: "#0c1322",
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "'Inter'", "system-ui", "sans-serif"],
        serif: ["Georgia", "'Times New Roman'", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
