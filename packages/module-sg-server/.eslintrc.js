module.exports = {
  root: true,
  env: {
    node: true,
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
    "plugin:jest/recommended",
    "plugin:jest/style",
    "../../configs/eslint/js",
    "../../configs/eslint/unicorn",
    "../../configs/eslint/import",
    "../../configs/eslint/ts",
    "../../configs/eslint/jest",
    "prettier",
  ],
  ignorePatterns: ["**/libs/**/*", "**/coverage/**"],
}
