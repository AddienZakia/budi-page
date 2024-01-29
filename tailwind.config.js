/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const flattenColorPalette = require("tailwindcss/src/util/flattenColorPalette");
const toColorValue = require("tailwindcss/src/util/toColorValue");

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
  plugins: [
    plugin(function ({ matchUtilities, e, config, theme }) {
      const textBorderSize = `--tw${config("prefix")}-text-border-size`;

      matchUtilities(
        {
          "text-border": (value) => ({
            "text-shadow": `0 0 var(${textBorderSize},1px) ${toColorValue(
              value
            )}`,
          }),
        },
        {
          values: (({ DEFAULT: _, ...colors }) => colors)(
            flattenColorPalette(theme("borderColor"))
          ),
          type: "color",
        }
      );

      matchUtilities(
        {
          "text-border-size": (value) => ({
            [textBorderSize]: value,
          }),
        },
        { values: theme("borderWidth") }
      );
    }),
  ],
};
