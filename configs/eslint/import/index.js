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
      files: ["**/*.{test,stories}.{ts,tsx}"],
      rules: Object.fromEntries(
        ["import/no-extraneous-dependencies"].map((rule) => [rule, OFF]),
      ),
    },
    {
      files: ["**/pages/**/*.{api,page}.{tsx,ts}", "**/*.stories.{ts,tsx}"],
      rules: Object.fromEntries(
        ["import/no-default-export"].map((rule) => [rule, OFF]),
      ),
    },
  ],
}
