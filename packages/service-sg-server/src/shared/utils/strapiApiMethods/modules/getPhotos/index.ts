import { Photos } from "common-types"

import { Query } from "../../../../const/strapi/Query"
import { isErrorStatus } from "../../../isErrorStatus"
import { strapiApiClient } from "../../../strapiApiClient"

type GetPhotos = () => Promise<Photos["data"]>

export const getPhotos: GetPhotos = async () => {
  const { data, status } = await strapiApiClient.get<Photos>(`/photos?${Query}`)

  if (isErrorStatus(status)) {
    throw new Error(`getPhotos status: ${status}`)
  }

  return data.data
}
