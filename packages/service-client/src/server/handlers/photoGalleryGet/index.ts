import { Card, ResponseBody } from "common-types"
import { Photos } from "../../types/strapi/photos"
import { apiHandler } from "../../utils/apiHandler"
import { isErrorStatus } from "../../utils/isErrorStatus"
import { infoLogger, loggerWrapper } from "../../utils/logger"
import { strapiApiClient } from "../../utils/strapiApiClient"
import { Query } from "./const"
import { getCard } from "./modules/getCard"

const photoGalleryGetBase = async () => {
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
