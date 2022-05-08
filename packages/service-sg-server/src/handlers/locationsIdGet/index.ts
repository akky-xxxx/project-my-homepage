import { Request } from "express"
import { LocationsIdGETRes } from "../../libs/bffApiClient"
import { apiHandler } from "../../shared/utils/apiHandler"
import { infoLogger, loggerWrapper } from "../../shared/utils/logger"
import { strapiApiMethods } from "../../shared/utils/strapiApiMethods"
import { getClientImage } from "./modules/getClientImage"

type TagsIdGetBase = (
  req: Request<{ locationId: string }>,
) => Promise<LocationsIdGETRes>

const locationsIdGetBase: TagsIdGetBase = async (req) => {
  // TODO: trace id を設定したら定義場所を変更
  const infoLoggerMain = loggerWrapper(infoLogger, { traceId: "-" })

  const {
    params: { locationId },
  } = req

  const [photosRes, tagsRes, locationRes] = await Promise.all([
    strapiApiMethods.getPhotos(),
    strapiApiMethods.getTags(),
    strapiApiMethods.getLocationsId(locationId),
  ])

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
