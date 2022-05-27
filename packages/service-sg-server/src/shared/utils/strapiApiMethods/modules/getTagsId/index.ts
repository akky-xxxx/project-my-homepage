import { TagsId } from "common-types"

import { Query } from "../../../../const/strapi/Query"
import { isErrorStatus } from "../../../isErrorStatus"
import { strapiApiClient } from "../../../strapiApiClient"

type GetTagsId = (tagId: string) => Promise<TagsId["data"]>

export const getTagsId: GetTagsId = async (tagId) => {
  const { data, status } = await strapiApiClient.get<TagsId>(
    `/tags/${tagId}?${Query}`,
  )

  if (isErrorStatus(status)) {
    throw new Error(`getTagsId status: ${status}`)
  }

  return data.data
}
