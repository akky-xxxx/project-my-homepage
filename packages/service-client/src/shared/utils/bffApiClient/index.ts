import axios from "axios"

const { NEXT_PUBLIC_PORT } = process.env

if (!NEXT_PUBLIC_PORT) throw new Error("NEXT_PUBLIC_PORT が定義されてません")

export const bffApiClient = axios.create({
  baseURL: `http://localhost:${NEXT_PUBLIC_PORT}/api`,
})
