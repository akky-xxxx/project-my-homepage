const { WARN } = require("../../../const")
exports.no_unnecessary_boolean_literal_compare = [
  WARN,
  {
    allowComparingNullableBooleansToTrue: false,
    allowComparingNullableBooleansToFalse: false,
  },
]
