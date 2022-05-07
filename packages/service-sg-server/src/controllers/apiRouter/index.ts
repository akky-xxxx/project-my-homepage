import { Router } from "express"
import { homeGet } from "../../handlers/homeGet"
import { photoGalleryGet } from "../../handlers/photoGalleryGet"
import { tagsGet } from "../../handlers/tagsGet"

const apiRouter = Router()

apiRouter.get("/home", homeGet)
apiRouter.get("/photo-gallery", photoGalleryGet)
apiRouter.get("/tags", tagsGet)

export { apiRouter }
