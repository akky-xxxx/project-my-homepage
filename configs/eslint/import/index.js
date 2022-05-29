const { OFF, ERROR } = require("../const")
const { order } = require("./rules/order")
const { extensions } = require("./rules/extensions")

module.exports = {
  rules: {
    "import/prefer-default-export": OFF,
    "import/no-default-export": ERROR,
    "import/order": order,
    "import/extensions": extensions,
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
