module.exports = {
  plugins: ["stylelint-order"],
  rules: {
    "order/properties-order": require("known-css-properties").all,
  },
}
