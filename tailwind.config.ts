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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
        fontSize: {
      clampH1: 'clamp(2rem, 4.5vw, 72px)',
      clampAward: 'clamp(1.5rem, 3.5vw, 5rem)',
    },
      borderRadius: {
    inherit: 'inherit',
  },
    },
  },
  plugins: [],
} satisfies Config;
