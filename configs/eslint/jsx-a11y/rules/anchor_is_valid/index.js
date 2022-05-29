const { ERROR } = require("../../../const")
exports.anchor_is_valid = [
  ERROR,
  {
    components: ["Link"],
    specialLink: ["hrefLeft", "hrefRight"],
    aspects: ["invalidHref", "preferButton"],
  },
]
