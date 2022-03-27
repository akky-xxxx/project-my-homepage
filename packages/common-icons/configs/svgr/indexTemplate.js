const path = require('path')

const indexTemplate = (filePaths) => {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath))
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename
    return `export { ${exportName} } from './${basename}'`
  })
  return exportEntries.join('\n')
}

exports.indexTemplate = indexTemplate
