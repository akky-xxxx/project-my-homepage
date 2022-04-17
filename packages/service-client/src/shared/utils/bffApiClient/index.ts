import axios from "axios"

const { NEXT_PUBLIC_SG_SERVER } = process.env

if (!NEXT_PUBLIC_SG_SERVER)
  throw new Error("NEXT_PUBLIC_SG_SERVER が定義されてません")

export const bffApiClient = axios.create({
  baseURL: `${NEXT_PUBLIC_SG_SERVER}/api`,
})
