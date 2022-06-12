import axios from "axios"
import { getEnv } from "common-utils"

import { IsTest } from "../../const/common"

const STRAPI_API_TOKEN = getEnv.string("STRAPI_API_TOKEN")
const STRAPI_SERVER = getEnv.string("STRAPI_SERVER")

if (!STRAPI_SERVER) throw new Error("STRAPI_SERVER が定義されてません")
if (!IsTest && !STRAPI_API_TOKEN) {
  throw new Error("STRAPI_API_TOKEN が定義されてません")
}

export const strapiApiClient = axios.create({
  baseURL: `${STRAPI_SERVER}/api`,
  headers: {
    Authorization: `Bearer ${STRAPI_API_TOKEN || ""}`,
  },
})
