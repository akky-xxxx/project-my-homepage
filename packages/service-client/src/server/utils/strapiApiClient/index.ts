import axios from "axios"

const { STRAPI_API_TOKEN, STRAPI_SERVER } = process.env

if (!STRAPI_SERVER) throw new Error("STRAPI_SERVER が定義されてません")
if (!STRAPI_API_TOKEN) throw new Error("STRAPI_API_TOKEN が定義されてません")

export const strapiApiClient = axios.create({
  baseURL: `${STRAPI_SERVER}/api`,
  headers: {
    Authorization: `Bearer ${STRAPI_API_TOKEN}`,
  },
})
