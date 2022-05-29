const { OFF } = require("../../const")
const { getRules } = require("../../utils/getRules")
const { prevent_abbreviations } = require("./prevent_abbreviations")

const prefix = "unicorn/"

const rulesBase = {}

exports.rules = getRules(rulesBase, prefix)
