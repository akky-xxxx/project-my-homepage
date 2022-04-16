import { json, Router, urlencoded } from "express"
import helmet from "helmet"

const middleware = Router()

middleware.use(helmet())
middleware.use(json())
middleware.use(urlencoded({ extended: false }))

export { middleware }
