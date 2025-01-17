/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#efd7d7",
        secondary: "#8f7084",
        secondaryHover: "#8f7084b8",
        accent: "#f8f0ee",
        background: "#f4f1eb",
      },
      fontFamily: {
        sans: ["Montserrat", "Arial", "sans-serif"],
        roca: ["Roca One", "serif"],
      },
    },
  },
  plugins: [],
};
