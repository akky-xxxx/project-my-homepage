import { Query } from "../../../../const/strapi/Query"
import { isErrorStatus } from "../../../isErrorStatus"
import { strapiApiClient } from "../../../strapiApiClient"

import type { LocationsId } from "common-types"

type GetLocationsId = (locationId: string) => Promise<LocationsId["data"]>

export const getLocationsId: GetLocationsId = async (locationId) => {
  const { data, status } = await strapiApiClient.get<LocationsId>(
    `/locations/${locationId}?${Query}`,
  )

  if (isErrorStatus(status)) {
    throw new Error(`getLocationsId status: ${status}`)
  }

  return data.data
}
