/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hmred: "#e50010",
        buttonBlack: "#222222",
        fontBlack: "#484848",
        fontGray: "#999898",
        footerGray: "#e4e4e4"
      },
      fontSize: {
        sm: "0.7rem",
      },
    },
  },
  plugins: [],
}
