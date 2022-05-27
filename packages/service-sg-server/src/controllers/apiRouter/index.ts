import { Router } from "express"

import { homeGet } from "../../handlers/homeGet"
import { locationsGet } from "../../handlers/locationsGet"
import { locationsIdGet } from "../../handlers/locationsIdGet"
import { photoGalleryGet } from "../../handlers/photoGalleryGet"
import { tagsGet } from "../../handlers/tagsGet"
import { tagsIdGet } from "../../handlers/tagsIdGet"

const apiRouter = Router()

apiRouter.get("/home", homeGet)
apiRouter.get("/locations", locationsGet)
apiRouter.get("/locations/:locationId", locationsIdGet)
apiRouter.get("/photo-gallery", photoGalleryGet)
apiRouter.get("/tags", tagsGet)
apiRouter.get("/tags/:tagId", tagsIdGet)

export { apiRouter }
