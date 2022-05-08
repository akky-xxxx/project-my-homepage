import { LocationsId, Photos, Tags } from "common-types"
import { Request } from "express"
import { LocationsIdGETRes } from "../../libs/bffApiClient"
import { apiHandler } from "../../shared/utils/apiHandler"
import { isErrorStatus } from "../../shared/utils/isErrorStatus"
import { infoLogger, loggerWrapper } from "../../shared/utils/logger"
import { strapiApiClient } from "../../shared/utils/strapiApiClient"
import { Query } from "./const"
import { getClientImage } from "./modules/getClientImage"

type TagsIdGetBase = (
  req: Request<{ locationId: string }>,
) => Promise<LocationsIdGETRes>

// 再参照等最小限にしているため
// eslint-disable-next-line max-statements
const locationsIdGetBase: TagsIdGetBase = async (req) => {
  // TODO: trace id を設定したら定義場所を変更
  const infoLoggerMain = loggerWrapper(infoLogger, { traceId: "-" })

  const {
    params: { locationId },
  } = req

  const [photosRes, tagsRes, locationRes] = await Promise.all([
    strapiApiClient.get<Photos>(`/photos?${Query}`),
    strapiApiClient.get<Tags>(`/tags?${Query}`),
    strapiApiClient.get<LocationsId>(`/locations/${locationId}?${Query}`),
  ])

  if (isErrorStatus(photosRes.status)) {
    throw new Error(`photos status: ${photosRes.status}`)
  }

  if (isErrorStatus(tagsRes.status)) {
    throw new Error(`tags status: ${tagsRes.status}`)
  }

  if (isErrorStatus(locationRes.status)) {
    throw new Error(`tag status: ${locationRes.status}`)
  }

  const getClientImageMain = getClientImage({
    photos: photosRes.data.data,
    tags: tagsRes.data.data,
  })

  const response: LocationsIdGETRes = {
    images:
      locationRes.data.data.attributes.photos.data.map(getClientImageMain),
    locationName: locationRes.data.data.attributes.locationName,
  }

  infoLoggerMain({
    endpoint: "GET: /api/tags/{locationId}",
    response,
  })

  return response
}

export const locationsIdGet = apiHandler(locationsIdGetBase)
