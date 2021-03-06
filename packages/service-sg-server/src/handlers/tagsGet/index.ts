import { apiHandler } from "../../shared/utils/apiHandler"
import { extractImage } from "../../shared/utils/extractImage"
import {
  infoLogger,
  loggerWrapper,
  debugLogger,
} from "../../shared/utils/logger"
import { strapiApiMethods } from "../../shared/utils/strapiApiMethods"
import { getClientTag } from "./modules/getClientTag"

import type { TagsGETRes } from "../../libs/bffApiClient"

type TagsGetBase = () => Promise<TagsGETRes>

const tagsGetBase: TagsGetBase = async () => {
  // TODO: trace id を設定したら定義場所を変更
  const infoLoggerMain = loggerWrapper(infoLogger, { traceId: "-" })
  const debugLoggerMain = loggerWrapper(debugLogger, { traceId: "-" })

  const [photosRes, tagsRes] = await Promise.all([
    strapiApiMethods.getPhotos(),
    strapiApiMethods.getTags(),
  ])
  debugLoggerMain({ photosRes, tagsRes })

  const getClientTagMain = getClientTag(extractImage(photosRes))

  // .filter(Boolean) で false を除去している
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const tags: TagsGETRes["tags"] = tagsRes
    .map(getClientTagMain)
    .filter(Boolean) as TagsGETRes["tags"]

  const response = { tags }
  infoLoggerMain({
    endpoint: "GET: /api/tags",
    response,
  })

  return response
}

export const tagsGet = apiHandler(tagsGetBase)
