import { json, Router, urlencoded } from "express"
import helmet from "helmet"
import { HelmetOptions } from "./const/HelmetOptions"

const middleware = Router()

middleware.use(helmet(HelmetOptions))
middleware.use(json())
middleware.use(urlencoded({ extended: false }))

export { middleware }
