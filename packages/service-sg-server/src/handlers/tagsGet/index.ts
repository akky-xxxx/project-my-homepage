import { Photos, Tags } from "common-types"
import { TagsGETRes } from "../../libs/bffApiClient"
import { apiHandler } from "../../shared/utils/apiHandler"
import { extractImagePath } from "../../shared/utils/extractImagePath"
import { isErrorStatus } from "../../shared/utils/isErrorStatus"
import { infoLogger, loggerWrapper } from "../../shared/utils/logger"
import { strapiApiClient } from "../../shared/utils/strapiApiClient"
import { Query } from "./const"
import { getClientTag } from "./modules/getClientTag"

type TagsGetBase = () => Promise<TagsGETRes>

// 再参照等最小限にしているため
// eslint-disable-next-line max-statements
const tagsGetBase: TagsGetBase = async () => {
  // TODO: trace id を設定したら定義場所を変更
  const infoLoggerMain = loggerWrapper(infoLogger, { traceId: "-" })

  const [photosRes, tagsRes] = await Promise.all([
    strapiApiClient.get<Photos>(`/photos?${Query}`),
    strapiApiClient.get<Tags>(`/tags?${Query}`),
  ])

  if (isErrorStatus(photosRes.status)) {
    throw new Error(`photos status: ${photosRes.status}`)
  }

  if (isErrorStatus(tagsRes.status)) {
    throw new Error(`tags status: ${tagsRes.status}`)
  }

  const getClientTagMain = getClientTag(extractImagePath(photosRes.data.data))

  // .filter(Boolean) で false を除去している
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const tags: TagsGETRes["tags"] = tagsRes.data.data
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
