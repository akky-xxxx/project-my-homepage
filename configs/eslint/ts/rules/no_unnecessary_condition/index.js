const { ERROR } = require("../../../const")
exports.no_unnecessary_condition = [
  ERROR,
  {
    allowConstantLoopConditions: false,
    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
  },
]
