module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.lint.json"],
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "../../configs/eslint/js",
    "../../configs/eslint/unicorn",
    "../../configs/eslint/import",
    "../../configs/eslint/ts",
    "../../configs/eslint/tsdoc",
    "../../configs/eslint/jest",
    "../../configs/eslint/sonarjs",
    "prettier",
  ],
  ignorePatterns: ["**/libs/**/*", "coverage/**", "out/**"],
}
