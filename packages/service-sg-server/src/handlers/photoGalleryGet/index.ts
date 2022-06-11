import { apiHandler } from "../../shared/utils/apiHandler"
import {
  infoLogger,
  loggerWrapper,
  debugLogger,
} from "../../shared/utils/logger"
import { strapiApiMethods } from "../../shared/utils/strapiApiMethods"
import { getImage } from "./modules/getImage"
import { sortDefault } from "./modules/sortDefault"

import type { PhotoGalleryGETRes } from "../../libs/bffApiClient"

type PhotoGalleryGetBase = () => Promise<PhotoGalleryGETRes>

const photoGalleryGetBase: PhotoGalleryGetBase = async () => {
  // TODO: trace id を設定したら定義場所を変更
  const infoLoggerMain = loggerWrapper(infoLogger, { traceId: "-" })
  const debugLoggerMain = loggerWrapper(debugLogger, { traceId: "-" })
  const photos = await strapiApiMethods.getPhotos()

  debugLoggerMain({ photos })

  const images: PhotoGalleryGETRes["images"] = photos.map(getImage).sort(sortDefault)

  const response: PhotoGalleryGETRes = { images }
  infoLoggerMain({
    endpoint: "GET: api/photo-gallery",
    response,
  })

  return response
}

export const photoGalleryGet = apiHandler(photoGalleryGetBase)
