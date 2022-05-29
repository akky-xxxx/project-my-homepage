const { OFF, ERROR, WARN } = require("../const")

module.exports = {
  rules: {
    "max-depth": [ERROR, 3],
    "max-lines": [ERROR, { max: 100 }],
    "max-nested-callbacks": [ERROR, 3],
    "max-statements": [ERROR, 10],
    "multiline-comment-style": OFF,
    "no-magic-numbers": WARN,
    "no-undefined": ERROR,
    "no-unused-vars": OFF,
    "sort-keys": WARN,
    complexity: [ERROR, 5],
  },
  overrides: [
    {
      files: ["**/*.{test,stories}.{ts,tsx}", "**/spy{/**,.ts}"],
      rules: Object.fromEntries(
        [
          "complexity",
          "max-lines",
          "max-nested-callbacks",
          "max-statements",
          "no-console",
          "no-magic-numbers",
          "no-undefined",
          "sort-keys",
        ].map((rule) => [rule, OFF]),
      ),
    },
  ],
}
