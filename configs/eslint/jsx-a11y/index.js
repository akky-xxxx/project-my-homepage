const { OFF } = require("../const")
const { anchor_is_valid } = require("./rules/anchor_is_valid")
const {
  label_has_associated_control,
} = require("./rules/label_has_associated_control")

module.exports = {
  rules: {
    "jsx-a11y/anchor-is-valid": anchor_is_valid,
    "jsx-a11y/label-has-associated-control": label_has_associated_control,
  },
  overrides: [
    {
      files: ["**/*.{test,stories}.{ts,tsx}", "**/spy{/**,.ts}"],
      rules: {
        "jsx-a11y/anchor-is-valid": OFF,
      },
    },
  ],
}
