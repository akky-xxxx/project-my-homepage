import { Router } from "express"
import { homeGet } from "../../handlers/homeGet"
import { photoGalleryGet } from "../../handlers/photoGalleryGet"

const apiRouter = Router()

apiRouter.get("/home", homeGet)
apiRouter.get("/photo-gallery", photoGalleryGet)

export { apiRouter }
