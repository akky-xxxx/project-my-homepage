const { ERROR } = require("../../../const")
exports.prevent_abbreviations = [
  ERROR,
  {
    allowList: {
      Props: true,
      props: true,
      Req: true,
      req: true,
      Res: true,
      res: true,
      ref: true,
    },
  },
]
