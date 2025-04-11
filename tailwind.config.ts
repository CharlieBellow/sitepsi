import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    gradientColorStops: {
      'primary': '#181753',
      'secondary': '#1C1E59',
      'danger': '#1C255E',
    },
    extend: {
      colors: {
        ciano: {
          1: '#44C4AD',
          2: '#41B9AC',
          3: "#35888E",
          4: "#327888",
          5: "#2C5779",
          6: "#233E6B",
        },
        primary: "#A3DDCB",
        fundo: "#1E2462",
      },
    },
  },
  plugins: [],
} satisfies Config
