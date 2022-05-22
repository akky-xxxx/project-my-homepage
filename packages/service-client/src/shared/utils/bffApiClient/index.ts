import axios from "axios"
import { Configuration, SGApi } from "service-sg-server/out/bffApiClient"

const { NEXT_PUBLIC_SG_SERVER } = process.env
const timeout = 300_000 // 5分

if (!NEXT_PUBLIC_SG_SERVER)
  throw new Error("NEXT_PUBLIC_SG_SERVER が定義されてません")

const axiosInstance = axios.create({
  baseURL: `${NEXT_PUBLIC_SG_SERVER}`,
  timeout,
})
const configuration = new Configuration({
  basePath: `${NEXT_PUBLIC_SG_SERVER}/api`,
})
const isJsonMime = configuration.isJsonMime.bind(configuration)

export const bffApiClient = new SGApi({ isJsonMime }, "", axiosInstance)
