import { Query } from "../../../../const/strapi/Query"
import { isErrorStatus } from "../../../isErrorStatus"
import { strapiApiClient } from "../../../strapiApiClient"

import type { Photos } from "common-types"

type GetPhotos = () => Promise<Photos["data"]>

export const getPhotos: GetPhotos = async () => {
  const { data, status } = await strapiApiClient.get<Photos>(`/photos?${Query}`)

  if (isErrorStatus(status)) {
    throw new Error(`getPhotos status: ${status}`)
  }

  return data.data
}
