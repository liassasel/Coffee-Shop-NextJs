/** @type {import('tailwindcss').Config} */
module.exports = {
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
        backgroundcolor: "#111315",
        cardcolor: "#1B1D1F",
        titlecolor: "#FEF7EE",
        descriptioncolor: "#6F757C",
        buttoncolor: "#6e757d",

      },
    },
  },
  plugins: [],
};
