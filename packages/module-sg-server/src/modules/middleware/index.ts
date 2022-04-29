import { json, Router, urlencoded } from "express"
import { middleware as openApiValidator } from "express-openapi-validator"
import helmet from "helmet"
import { IsDevelopment } from "../../shared/const/common"

const middleware = Router()

middleware.use(helmet())
middleware.use(json())
middleware.use(urlencoded({ extended: false }))
if (IsDevelopment) {
  middleware.use(
    openApiValidator({
      apiSpec: "./src/open-api.json",
      validateResponses: true,
    }),
  )
}

export { middleware }
