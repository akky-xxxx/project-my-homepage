const path = require("path")
const fs = require("fs")

const DistDir = path.join(__dirname, "../../", "dist")

const ignoreTsExtensions = (fileName) => fileName.endsWith(".tsx")
const replaceExtensions = (fileName) => fileName.replace(".tsx", "")
const getExport = (componentName) =>
  `export { ${componentName} } from './${componentName}'`

const indexTemplate = (filePaths) => {
  const existedIcons = fs
    .readdirSync(DistDir)
    .filter(ignoreTsExtensions)
    .map(replaceExtensions)
    .map(getExport)
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath))
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename
    return `export { ${exportName} } from './${basename}'`
  })
  return [...new Set([...exportEntries, ...existedIcons])].sort().join("\n")
}

exports.indexTemplate = indexTemplate
