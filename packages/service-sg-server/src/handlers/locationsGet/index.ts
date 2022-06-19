import { apiHandler } from "../../shared/utils/apiHandler"
import { extractImagePath } from "../../shared/utils/extractImagePath"
import {
  infoLogger,
  loggerWrapper,
  debugLogger,
} from "../../shared/utils/logger"
import { strapiApiMethods } from "../../shared/utils/strapiApiMethods"
import { getClientLocations } from "./modules/getClientLocations"
import { sortLocation } from "./modules/sortLocation"

import type { LocationsGETRes } from "../../libs/bffApiClient"

type LocationsGetBase = () => Promise<LocationsGETRes>

const locationsGetBase: LocationsGetBase = async () => {
  // TODO: trace id を設定したら定義場所を変更
  const infoLoggerMain = loggerWrapper(infoLogger, { traceId: "-" })
  const debugLoggerMain = loggerWrapper(debugLogger, { traceId: "-" })

  const [photosRes, locationsRes] = await Promise.all([
    strapiApiMethods.getPhotos(),
    strapiApiMethods.getLocations(),
  ])
  debugLoggerMain({ locationsRes, photosRes })

  const getClientLocationsMain = getClientLocations(extractImagePath(photosRes))

  // .filter(Boolean) で false を除去している
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const images: LocationsGETRes["images"] = locationsRes
    .map(getClientLocationsMain)
    .filter(Boolean) as LocationsGETRes["images"]

  images.sort(sortLocation)

  const response = { images }
  infoLoggerMain({
    endpoint: "GET: /api/locations",
    response,
  })

  return response
}

export const locationsGet = apiHandler(locationsGetBase)
