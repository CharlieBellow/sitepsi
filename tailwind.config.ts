import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  color: {
    primary: 'hsl(var(--primary))',
    ciano: {
    }
    // "ciano-1": #49D5BB, 
    // "blue-bg": 1E2462,
  },
  plugins: [],
} satisfies Config;
