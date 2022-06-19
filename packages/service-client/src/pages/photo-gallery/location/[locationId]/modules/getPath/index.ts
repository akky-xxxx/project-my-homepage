import { getUrl } from "../../../../../../shared/utils/getUrl"

import type { LocationsGETRes } from "service-sg-server/out/bffApiClient"

type GetPath = (location: LocationsGETRes["images"][number]) => string

export const getPath: GetPath = (location) =>
  getUrl("PhotoGalleryLocationDetail", { id: location.locationId })
