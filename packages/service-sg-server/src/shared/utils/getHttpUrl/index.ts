type GetHttpUrl = (path: string) => string

const { STRAPI_SERVER } = process.env

if (!STRAPI_SERVER) {
  throw new Error("STRAPI_SERVER が定義されていません")
}

const httpRegExp = /^https?:(\/){2}/

export const getHttpUrl: GetHttpUrl = (path) =>
  httpRegExp.test(path) ? path : `${STRAPI_SERVER}${path}`
