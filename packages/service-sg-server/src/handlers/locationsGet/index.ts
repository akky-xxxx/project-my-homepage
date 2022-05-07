import { Locations, Photos } from "common-types"
import { LocationsGETRes } from "../../libs/bffApiClient"
import { apiHandler } from "../../shared/utils/apiHandler"
import { extractImagePath } from "../../shared/utils/extractImagePath"
import { isErrorStatus } from "../../shared/utils/isErrorStatus"
import { infoLogger, loggerWrapper } from "../../shared/utils/logger"
import { strapiApiClient } from "../../shared/utils/strapiApiClient"
import { Query } from "./const"
import { getClientLocations } from "./modules/getClientLocations"

type LocationsGetBase = () => Promise<LocationsGETRes>

// 再参照等最小限にしているため
// eslint-disable-next-line max-statements
const locationsGetBase: LocationsGetBase = async () => {
  // TODO: trace id を設定したら定義場所を変更
  const infoLoggerMain = loggerWrapper(infoLogger, { traceId: "-" })

  const [photosRes, locationsRes] = await Promise.all([
    strapiApiClient.get<Photos>(`/photos?${Query}`),
    strapiApiClient.get<Locations>(`/locations?${Query}`),
  ])

  if (isErrorStatus(photosRes.status)) {
    throw new Error(`photos status: ${photosRes.status}`)
  }

  if (isErrorStatus(locationsRes.status)) {
    throw new Error(`locations status: ${locationsRes.status}`)
  }

  const getClientLocationsMain = getClientLocations(
    extractImagePath(photosRes.data.data),
  )

  // .filter(Boolean) で false を除去している
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const locations: LocationsGETRes["locations"] = locationsRes.data.data
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
