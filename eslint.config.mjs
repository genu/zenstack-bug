import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": ["off"],
      "@stylistic/no-extra-parens": ["error", "all", { nestedBinaryExpressions: false }],
      "@stylistic/quotes": ["error", "double"],
      "vue/html-closing-bracket-newline": ["error", {
        singleline: "never",
        multiline: "always",
        selfClosingTag: {
          singleline: "never",
          multiline: "never",
        },
      }],

    },
  },
)
