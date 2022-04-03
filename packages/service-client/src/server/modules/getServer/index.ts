import express, { Express } from "express"
import { RequestHandler } from "next/dist/server/next"
import { router } from "../../controllers"
import { errorHandler } from "../errorHandler"
import { middleware } from "../middleware"

// test 向けに nextHandler を optional にしてる
type GetServer = (nextHandler?: RequestHandler) => Express
export const getServer: GetServer = (nextHandler) => {
  const server = express()

  server.use(middleware)

  server.use(router)

  if (nextHandler) {
    server.all("*", (req, res) => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      nextHandler(req, res)
    })
  }

  server.use(errorHandler)

  return server
}
