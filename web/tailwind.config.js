/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f1117",
        window: "#161b22",
        border: "#30363d",
        accent: "#58a6ff",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}