const { WARN } = require("../const")

module.exports = {
  plugins: ["eslint-plugin-tsdoc"],
  rules: {
    "tsdoc/syntax": WARN,
  },
}
