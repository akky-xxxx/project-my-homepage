import { IsDevelopment } from "../../const/common"

const { STRAPI_SERVER } = process.env

if (!STRAPI_SERVER) {
  throw new Error("STRAPI_SERVER が未定義です")
}

export const getFileUrl = (filePath: string) =>
  IsDevelopment ? `${STRAPI_SERVER}${filePath}` : filePath
