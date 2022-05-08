import { Locations, Photos, Tags, TagsId } from "common-types"
import { Request } from "express"
import { TagsIdGETRes } from "../../libs/bffApiClient"
import { Query } from "../../shared/const/strapi/Query"
import { apiHandler } from "../../shared/utils/apiHandler"
import { isErrorStatus } from "../../shared/utils/isErrorStatus"
import { infoLogger, loggerWrapper } from "../../shared/utils/logger"
import { strapiApiClient } from "../../shared/utils/strapiApiClient"
import { getClientImage } from "./modules/getClientImage"

type TagsIdGetBase = (req: Request<{ tagId: string }>) => Promise<TagsIdGETRes>

// 再参照等最小限にしているため
// eslint-disable-next-line max-statements
const tagsIdGetBase: TagsIdGetBase = async (req) => {
  // TODO: trace id を設定したら定義場所を変更
  const infoLoggerMain = loggerWrapper(infoLogger, { traceId: "-" })

  const {
    params: { tagId },
  } = req

  const [photosRes, tagsRes, locationsRes, tagRes] = await Promise.all([
    strapiApiClient.get<Photos>(`/photos?${Query}`),
    strapiApiClient.get<Tags>(`/tags?${Query}`),
    strapiApiClient.get<Locations>(`/locations?${Query}`),
    strapiApiClient.get<TagsId>(`/tags/${tagId}?${Query}`),
  ])

  if (isErrorStatus(photosRes.status)) {
    throw new Error(`photos status: ${photosRes.status}`)
  }

  if (isErrorStatus(tagsRes.status)) {
    throw new Error(`tags status: ${tagsRes.status}`)
  }

  if (isErrorStatus(locationsRes.status)) {
    throw new Error(`locations status: ${locationsRes.status}`)
  }

  if (isErrorStatus(tagRes.status)) {
    throw new Error(`tag status: ${tagRes.status}`)
  }

  const getClientImageMain = getClientImage({
    locations: locationsRes.data.data,
    photos: photosRes.data.data,
    tags: tagsRes.data.data,
  })

  const response: TagsIdGETRes = {
    images: tagRes.data.data.attributes.photos.data.map(getClientImageMain),
    tagName: tagRes.data.data.attributes.tagName,
  }

  infoLoggerMain({
    endpoint: "GET: /api/tags/{tagId}",
    response,
  })

  return response
}

export const tagsIdGet = apiHandler(tagsIdGetBase)
