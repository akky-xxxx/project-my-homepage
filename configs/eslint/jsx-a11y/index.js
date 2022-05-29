const { OFF } = require("../const")

module.exports = {
  overrides: [
    {
      files: [
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*.stories.tsx",
        "**/spy.ts",
        "**/spy/**",
      ],
      rules: {
        "jsx-a11y/anchor-is-valid": OFF,
      },
    },
  ],
}
