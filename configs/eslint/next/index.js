const { OFF, ERROR } = require("../const")
const {
  function_component_definition,
} = require("./rules/function_component_definition")

module.exports = {
  rules: {
    "react/function-component-definition": function_component_definition,
    "react/jsx-filename-extension": [ERROR, { extensions: [".ts", ".tsx"] }],
    "react/jsx-fragments": [ERROR, "element"],
    "react/jsx-props-no-spreading": OFF,
    "react/prop-types": OFF,
    "react/require-default-props": OFF,
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
