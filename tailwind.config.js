/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white_custom: "#FEFEFF",
        biru_muda: "#EAF2FF",
        biru_gelap: "#698BC1",
        biru_nyentrik: "#5C65E5",
        gray_custom: "#C9D8EE",
      },
    },
  },
  plugins: [],
};
