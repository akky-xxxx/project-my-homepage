import { Card, Photos, ResponseBody } from "common-types"
import { PhotoGalleryGETRes } from "../../libs/bffApiClient"
import { apiHandler } from "../../shared/utils/apiHandler"
import { isErrorStatus } from "../../shared/utils/isErrorStatus"
import { infoLogger, loggerWrapper } from "../../shared/utils/logger"
import { strapiApiClient } from "../../shared/utils/strapiApiClient"
import { Query } from "./const"
import { getCard } from "./modules/getCard"

type PhotoGalleryGetBase = () => Promise<PhotoGalleryGETRes>

const photoGalleryGetBase: PhotoGalleryGetBase = async () => {
  // TODO: trace id を設定したら定義場所を変更
  const infoLoggerMain = loggerWrapper(infoLogger, { traceId: "-" })
  const {
    data: { data },
    status,
  } = await strapiApiClient.get<Photos>(`/photos?${Query}`)

  if (isErrorStatus(status)) {
    throw new Error(`status: ${status}`)
  }

  const cards: Card[] = data.map(getCard)

  const response: ResponseBody = { cards }
  infoLoggerMain({
    endpoint: "GET: api/photo-gallery",
    response,
  })

  return response
}

export const photoGalleryGet = apiHandler(photoGalleryGetBase)
