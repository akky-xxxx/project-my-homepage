import { Query } from "../../../../const/strapi/Query"
import { isErrorStatus } from "../../../isErrorStatus"
import { strapiApiClient } from "../../../strapiApiClient"

import type { Tags } from "common-types"

type GetTags = () => Promise<Tags["data"]>

export const getTags: GetTags = async () => {
  const { data, status } = await strapiApiClient.get<Tags>(`/tags?${Query}`)

  if (isErrorStatus(status)) {
    throw new Error(`getTags status: ${status}`)
  }

  return data.data
}
