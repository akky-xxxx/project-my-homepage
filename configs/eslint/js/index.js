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
      rules: {
        "max-nested-callbacks": OFF,
        "no-magic-numbers": OFF,
        "sort-keys": OFF,
        "no-undefined": OFF,
        "no-console": OFF,
        "max-lines": OFF,
        "max-statements": OFF,
        complexity: OFF,
      },
    },
  ],
}
