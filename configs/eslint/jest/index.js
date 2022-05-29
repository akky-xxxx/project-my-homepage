const { consistent_test_it } = require("./rules/consistent_test_it")

module.exports = {
  plugins: ["jest"],
  rules: {
    "jest/consistent-test-it": consistent_test_it,
  },
}
