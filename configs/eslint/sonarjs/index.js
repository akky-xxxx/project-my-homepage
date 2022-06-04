const { OFF } = require("../const")

module.exports = {
  plugins: ["sonarjs"],
  extends: ["plugin:sonarjs/recommended"],
  overrides: [
    {
      files: ["**/*.{test,stories}.{ts,tsx}", "**/spy{/**,.ts}"],
      rules: Object.fromEntries(
        ["sonarjs/no-duplicate-string", "sonarjs/cognitive-complexity"].map(
          (rule) => [rule, OFF],
        ),
      ),
    },
  ],
}
