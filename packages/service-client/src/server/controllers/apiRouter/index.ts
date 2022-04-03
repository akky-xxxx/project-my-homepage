import { Router } from "express"
import { homeGet } from "../../handlers/homeGet"

const apiRouter = Router()

apiRouter.get("/home", homeGet)

export { apiRouter }
