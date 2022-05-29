const { OFF, ERROR, WARN } = require("../const")
const { array_type } = require("./rules/array_type")
const {
  consistent_type_assertions,
} = require("./rules/consistent_type_assertions")
const { consistent_type_imports } = require("./rules/consistent_type_imports")
const {
  no_confusing_void_expression,
} = require("./rules/no_confusing_void_expression")
const { no_implicit_any_catch } = require("./rules/no_implicit_any_catch")
const {
  no_unnecessary_boolean_literal_compare,
} = require("./rules/no_unnecessary_boolean_literal_compare")
const { no_unnecessary_condition } = require("./rules/no_unnecessary_condition")
const {
  sort_type_union_intersection_members,
} = require("./rules/sort_type_union_intersection_members")

module.exports = {
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/array-type": array_type,
    "@typescript-eslint/consistent-indexed-object-style": [ERROR, "record"],
    "@typescript-eslint/consistent-type-assertions": consistent_type_assertions,
    "@typescript-eslint/consistent-type-definitions": [ERROR, "type"],
    "@typescript-eslint/consistent-type-imports": consistent_type_imports,
    "@typescript-eslint/explicit-module-boundary-types": OFF,
    "@typescript-eslint/no-confusing-void-expression":
      no_confusing_void_expression,
    "@typescript-eslint/no-implicit-any-catch": no_implicit_any_catch,
    "@typescript-eslint/no-unnecessary-boolean-literal-compare":
      no_unnecessary_boolean_literal_compare,
    "@typescript-eslint/no-unnecessary-condition": no_unnecessary_condition,
    "@typescript-eslint/no-unnecessary-type-arguments": WARN,
    "@typescript-eslint/prefer-string-starts-ends-with": WARN,
    "@typescript-eslint/sort-type-union-intersection-members":
      sort_type_union_intersection_members,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
  overrides: [
    {
      files: ["**/*.test.{ts,tsx}"],
      rules: {
        "@typescript-eslint/no-unsafe-member-access": OFF,
        "@typescript-eslint/no-unsafe-call": OFF,
      },
    },
  ],
}
