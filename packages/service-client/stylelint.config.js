module.exports = {
  processors: ["stylelint-processor-styled-components"],
  customSyntax: "postcss-jsx", // TODO: チェックの時はコメントアウトする。14系でうまく動かないため
  extends: [
    "stylelint-config-standard",
    "stylelint-config-styled-components",
    "stylelint-config-prettier",
    "../../configs/stylelint/plugin",
    "../../configs/stylelint/prettier",
    "../../configs/stylelint/common",
  ],
}
