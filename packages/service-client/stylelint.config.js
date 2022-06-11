module.exports = {
  processors: ["stylelint-processor-styled-components"],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-styled-components",
    "stylelint-config-prettier",
    "../../configs/stylelint/plugin",
    "../../configs/stylelint/prettier",
    "../../configs/stylelint/common",
  ],
}
