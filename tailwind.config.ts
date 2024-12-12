import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background1: "#110050",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      'researcher': ['researcher'],
      'anonymus': ['anonymus']
    }
  },
  plugins: [],
} satisfies Config;
