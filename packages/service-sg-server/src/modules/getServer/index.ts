import express, { Express } from "express"

import { router } from "../../controllers"
import { errorHandler } from "../errorHandler"
import { middleware } from "../middleware"

type GetServer = () => Express
export const getServer: GetServer = () => {
  const server = express()

  server.use(middleware)

  server.use(router)

  server.use(errorHandler)

  return server
}
