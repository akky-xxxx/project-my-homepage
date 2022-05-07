import { Router } from "express"
import { homeGet } from "../../handlers/homeGet"
import { locationsGet } from "../../handlers/locationsGet"
import { photoGalleryGet } from "../../handlers/photoGalleryGet"
import { tagsGet } from "../../handlers/tagsGet"

const apiRouter = Router()

apiRouter.get("/home", homeGet)
apiRouter.get("/locations", locationsGet)
apiRouter.get("/photo-gallery", photoGalleryGet)
apiRouter.get("/tags", tagsGet)

export { apiRouter }
