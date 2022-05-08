import { Card, ResponseBody } from "common-types"
import { PhotoGalleryGETRes } from "../../libs/bffApiClient"
import { apiHandler } from "../../shared/utils/apiHandler"
import { infoLogger, loggerWrapper } from "../../shared/utils/logger"
import { strapiApiMethods } from "../../shared/utils/strapiApiMethods"
import { getCard } from "./modules/getCard"

type PhotoGalleryGetBase = () => Promise<PhotoGalleryGETRes>

const photoGalleryGetBase: PhotoGalleryGetBase = async () => {
  // TODO: trace id を設定したら定義場所を変更
  const infoLoggerMain = loggerWrapper(infoLogger, { traceId: "-" })
  const photos = await strapiApiMethods.getPhotos()

  const cards: Card[] = photos.map(getCard)

  const response: ResponseBody = { cards }
  infoLoggerMain({
    endpoint: "GET: api/photo-gallery",
    response,
  })

  return response
}

export const photoGalleryGet = apiHandler(photoGalleryGetBase)
