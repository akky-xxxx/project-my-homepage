const { OFF, ERROR } = require("./const")

module.exports = {
  rules: {
    "import/prefer-default-export": OFF,
    "import/no-default-export": ERROR,
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
    {
      files: ["**/pages/**/*.{api,page}.{tsx,ts}", "**/*.stories.{ts,tsx}"],
      rules: {
        "import/no-default-export": OFF,
      },
    },
  ],
}
