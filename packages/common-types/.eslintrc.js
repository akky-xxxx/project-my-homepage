module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "../../configs/eslint/js",
    "../../configs/eslint/unicorn",
    "../../configs/eslint/import",
    "../../configs/eslint/ts",
    "../../configs/eslint/tsdoc",
    "prettier",
  ],
}
