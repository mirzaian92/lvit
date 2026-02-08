/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  singleQuote: false,
  printWidth: 100,
  trailingComma: "all",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" },
    },
  ],
};

