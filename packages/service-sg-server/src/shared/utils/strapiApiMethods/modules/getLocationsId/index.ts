import { LocationsId } from "common-types"
import { Query } from "../../../../const/strapi/Query"
import { isErrorStatus } from "../../../isErrorStatus"
import { strapiApiClient } from "../../../strapiApiClient"

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
