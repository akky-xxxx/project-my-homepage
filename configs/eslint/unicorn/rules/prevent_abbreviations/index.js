const { ERROR } = require("../../../const")
exports.prevent_abbreviations = [
  ERROR,
  {
    replacements: Object.fromEntries(
      [
        // 許容する略称一覧
        "props",
        "req",
        "res",
        "ref",
        "env",
      ].map((keyword) => [keyword, false]),
    ),
  },
]
