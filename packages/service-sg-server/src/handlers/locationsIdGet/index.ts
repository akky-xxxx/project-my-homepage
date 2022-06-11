import { apiHandler } from "../../shared/utils/apiHandler"
import {
  infoLogger,
  loggerWrapper,
  debugLogger,
} from "../../shared/utils/logger"
import { strapiApiMethods } from "../../shared/utils/strapiApiMethods"
import { getClientImage } from "./modules/getClientImage"

import type { LocationsIdGETRes } from "../../libs/bffApiClient"
import type { Request } from "express"

type TagsIdGetBase = (
  req: Request<{ locationId: string }>,
) => Promise<LocationsIdGETRes>

const locationsIdGetBase: TagsIdGetBase = async (req) => {
  // TODO: trace id を設定したら定義場所を変更
  const infoLoggerMain = loggerWrapper(infoLogger, { traceId: "-" })
  const debugLoggerMain = loggerWrapper(debugLogger, { traceId: "-" })

  const {
    params: { locationId },
  } = req
  debugLoggerMain({ locationId })

  const [photosRes, tagsRes, locationRes] = await Promise.all([
    strapiApiMethods.getPhotos(),
    strapiApiMethods.getTags(),
    strapiApiMethods.getLocationsId(locationId),
  ])
  debugLoggerMain({ locationRes, photosRes, tagsRes })

  const getClientImageMain = getClientImage({
    photos: photosRes,
    tags: tagsRes,
  })

  const response: LocationsIdGETRes = {
    images: locationRes.attributes.photos.data.map(getClientImageMain),
    locationName: locationRes.attributes.locationName,
  }

  infoLoggerMain({
    endpoint: "GET: /api/tags/{locationId}",
    response,
  })

  return response
}

export const locationsIdGet = apiHandler(locationsIdGetBase)
