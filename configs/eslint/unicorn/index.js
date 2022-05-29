const { OFF } = require("../const")
const { prevent_abbreviations } = require("./rules/prevent_abbreviations")

module.exports = {
  plugins: ["unicorn"],
  rules: {
    "unicorn/explicit-length-check": OFF,
    "unicorn/filename-case": OFF,
    "unicorn/new-for-builtins": OFF,
    "unicorn/no-array-callback-reference": OFF,
    "unicorn/no-array-for-each": OFF,
    "unicorn/no-array-reduce": OFF,
    "unicorn/no-lonely-if": OFF,
    "unicorn/no-new-array": OFF,
    "unicorn/no-null": OFF,
    "unicorn/no-useless-undefined": OFF,
    "unicorn/prefer-module": OFF,
    "unicorn/prefer-node-protocol": OFF,
    "unicorn/prefer-number-properties": OFF,
    "unicorn/prevent-abbreviations": prevent_abbreviations,
  },
}
