const { ERROR } = require("../../../const")

exports.order = [
  ERROR,
  {
    "newlines-between": "always",
    alphabetize: { order: "asc" },
    groups: [
      ["builtin", "external"],
      "internal",
      ["parent", "sibling", "index"],
      "object",
      "type",
    ],
  },
]
