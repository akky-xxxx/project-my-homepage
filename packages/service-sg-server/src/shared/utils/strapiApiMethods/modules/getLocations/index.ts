import { Query } from "../../../../const/strapi/Query"
import { isErrorStatus } from "../../../isErrorStatus"
import { strapiApiClient } from "../../../strapiApiClient"

import type { Locations } from "common-types"

type GetLocations = () => Promise<Locations["data"]>

export const getLocations: GetLocations = async () => {
  const { data, status } = await strapiApiClient.get<Locations>(
    `/locations?${Query}`,
  )

  if (isErrorStatus(status)) {
    throw new Error(`getLocations status: ${status}`)
  }

  return data.data
}
