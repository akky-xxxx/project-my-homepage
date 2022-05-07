const { FILE_SERVER } = process.env

if (!FILE_SERVER) {
  throw new Error("FILE_SERVER が未定義です")
}

export const getFileUrl = (filePath: string) => `${FILE_SERVER}${filePath}`
