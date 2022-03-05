const { OFF, ERROR } = require("./const")

module.exports = {
  rules: {
    "import/prefer-default-export": OFF,
    "import/extensions": [
      ERROR,
      {
        js: "never",
        ts: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: [
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*.stories.ts",
        "**/*.stories.tsx",
      ],
      rules: {
        "import/no-extraneous-dependencies": OFF,
      },
    },
  ],
}
