const {
  property_no_vendor_prefix,
} = require("./rules/property_no_vendor_prefix")
const { selector_type_no_unknown } = require("./rules/selector_type_no_unknown")
const { value_no_vendor_prefix } = require("./rules/value_no_vendor_prefix")

module.exports = {
  rules: {
    "color-function-notation": "legacy",
    "property-no-vendor-prefix": property_no_vendor_prefix,
    "selector-type-no-unknown": selector_type_no_unknown,
    "value-keyword-case": ["lower", { ignoreKeywords: ["dummyValue"] }],
    "value-no-vendor-prefix": value_no_vendor_prefix,
  },
}
