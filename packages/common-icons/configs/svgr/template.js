const template = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl },
) => {
  return tpl`import { SVGProps } from "react"
${interfaces}

export const ${componentName.replace("Svg", "")} = (${props}) => ${jsx};`
}

exports.template = template
