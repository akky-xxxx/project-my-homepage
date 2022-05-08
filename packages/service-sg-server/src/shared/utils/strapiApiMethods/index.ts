import { getLocations } from "./modules/getLocations"
import { getLocationsId } from "./modules/getLocationsId"
import { getPhotos } from "./modules/getPhotos"
import { getTags } from "./modules/getTags"
import { getTagsId } from "./modules/getTagsId"

export const strapiApiMethods = {
  getLocations,
  getLocationsId,
  getPhotos,
  getTags,
  getTagsId,
} as const
