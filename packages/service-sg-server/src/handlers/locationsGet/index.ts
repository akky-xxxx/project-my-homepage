import { LocationsGETRes } from "../../libs/bffApiClient"
import { apiHandler } from "../../shared/utils/apiHandler"
import { extractImagePath } from "../../shared/utils/extractImagePath"
import { infoLogger, loggerWrapper } from "../../shared/utils/logger"
import { strapiApiMethods } from "../../shared/utils/strapiApiMethods"
import { getClientLocations } from "./modules/getClientLocations"

type LocationsGetBase = () => Promise<LocationsGETRes>

const locationsGetBase: LocationsGetBase = async () => {
  // TODO: trace id を設定したら定義場所を変更
  const infoLoggerMain = loggerWrapper(infoLogger, { traceId: "-" })

  const [photosRes, locationsRes] = await Promise.all([
    strapiApiMethods.getPhotos(),
    strapiApiMethods.getLocations(),
  ])

  const getClientLocationsMain = getClientLocations(extractImagePath(photosRes))

  // .filter(Boolean) で false を除去している
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const locations: LocationsGETRes["locations"] = locationsRes
    .map(getClientLocationsMain)
    .filter(Boolean) as LocationsGETRes["locations"]

  const response = { locations }
  infoLoggerMain({
    endpoint: "GET: /api/locations",
    response,
  })

  return response
}

export const locationsGet = apiHandler(locationsGetBase)
