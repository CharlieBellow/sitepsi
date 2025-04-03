import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ciano: {
          1: 'hsl(var(--ciano-1))',
          2: 'hsl(var(--ciano-2))',
          3: "hsl(var(--ciano-3))",
          4: "hsl(var(--ciano-4))",
          5: "hsl(var(--ciano-5))",
        },
        primary: "hsl(var(--primary))",
        fundo: "hsl(var(--fundo))",
      },
    },
  },
  plugins: [],
} satisfies Config
