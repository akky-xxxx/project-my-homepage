import { HomeGETRes } from "../../libs/bffApiClient"
import { apiHandler } from "../../shared/utils/apiHandler"
import { infoLogger, loggerWrapper } from "../../shared/utils/logger"
import { strapiApiMethods } from "../../shared/utils/strapiApiMethods"
import { getMainVisualPath } from "./modules/getMainVisualPath"
import { isMainVisual } from "./modules/isMainVisual"

type ResponseBody = {
  mainVisualPaths: string[]
}

type HomeGetBase = () => Promise<HomeGETRes>

const homeGetBase: HomeGetBase = async () => {
  const photos = await strapiApiMethods.getPhotos()

  const mainVisualPaths = photos.filter(isMainVisual).map(getMainVisualPath)
  const infoLoggerMain = loggerWrapper(infoLogger, { traceId: "-" })

  const response: ResponseBody = {
    mainVisualPaths,
  }
  infoLoggerMain({
    endpoint: "GET: /api/home",
    response,
  })

  return response
}

export const homeGet = apiHandler(homeGetBase)
