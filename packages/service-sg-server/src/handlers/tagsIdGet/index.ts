import { apiHandler } from "../../shared/utils/apiHandler"
import {
  infoLogger,
  loggerWrapper,
  debugLogger,
} from "../../shared/utils/logger"
import { strapiApiMethods } from "../../shared/utils/strapiApiMethods"
import { getClientImage } from "./modules/getClientImage"

import type { TagsIdGETRes } from "../../libs/bffApiClient"
import type { Request } from "express"

type TagsIdGetBase = (req: Request<{ tagId: string }>) => Promise<TagsIdGETRes>

const tagsIdGetBase: TagsIdGetBase = async (req) => {
  // TODO: trace id を設定したら定義場所を変更
  const infoLoggerMain = loggerWrapper(infoLogger, { traceId: "-" })
  const debugLoggerMain = loggerWrapper(debugLogger, { traceId: "-" })

  const {
    params: { tagId },
  } = req
  debugLoggerMain({ tagId })

  const [photosRes, tagsRes, locationsRes, tagRes] = await Promise.all([
    strapiApiMethods.getPhotos(),
    strapiApiMethods.getTags(),
    strapiApiMethods.getLocations(),
    strapiApiMethods.getTagsId(tagId),
  ])
  debugLoggerMain({ photosRes, tagsRes, locationsRes, tagRes })

  const getClientImageMain = getClientImage({
    locations: locationsRes,
    photos: photosRes,
    tags: tagsRes,
  })

  const response: TagsIdGETRes = {
    images: tagRes.attributes.photos.data.map(getClientImageMain),
    tagName: tagRes.attributes.tagName,
  }

  infoLoggerMain({
    endpoint: "GET: /api/tags/{tagId}",
    response,
  })

  return response
}

export const tagsIdGet = apiHandler(tagsIdGetBase)
