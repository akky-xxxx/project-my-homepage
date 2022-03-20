const properties = require("known-css-properties").all

module.exports = {
  processors: ["stylelint-processor-styled-components"],
  customSyntax: "postcss-jsx", // TODO: チェックの時はコメントアウトする。14系でうまく動かないため
  plugins: [
    "stylelint-prettier",
    "stylelint-order",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-no-unsupported-browser-features",
  ],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-styled-components",
    "stylelint-config-prettier",
  ],
  rules: {
    "plugin/declaration-block-no-ignored-properties": true,
    "plugin/no-unsupported-browser-features": true,
    "prettier/prettier": true,
    "order/properties-order": properties,
    "value-keyword-case": ["lower", { ignoreKeywords: ["dummyValue"] }],
    "selector-type-no-unknown": [
      true,
      {
        ignoreTypes: ["/-styled-mixin/", "$dummyValue"],
      },
    ],
    "property-no-vendor-prefix": [
      true,
      {
        ignoreProperties: ["box-orient"],
      },
    ],
    "value-no-vendor-prefix": [
      true,
      {
        ignoreValues: ["box"],
      },
    ],
  },
}
