const { ERROR } = require("./const")

module.exports = {
  plugins: ["jest"],
  rules: {
    "jest/consistent-test-it": [
      ERROR,
      {
        fn: "it",
        withinDescribe: "it",
      },
    ],
  },
}
