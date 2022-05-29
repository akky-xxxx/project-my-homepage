const { OFF, ERROR } = require("../const")

module.exports = {
  rules: {
    "react/jsx-props-no-spreading": OFF,
    "react/prop-types": OFF,
    "react/require-default-props": OFF,
    "react/jsx-fragments": [ERROR, "element"],
    "react/jsx-filename-extension": [ERROR, { extensions: [".ts", ".tsx"] }],
    "jsx-a11y/anchor-is-valid": [
      ERROR,
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      ERROR,
      {
        controlComponents: ["StyledTextarea"],
      },
    ],
    "react/function-component-definition": [
      ERROR,
      { namedComponents: "arrow-function" },
    ],
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "no-use-before-define": OFF,
      },
    },
  ],
}
