import { extractPhotoId } from "../../../../shared/utils/extractPhotoId"

import type { LocationsGETRes } from "../../../../libs/bffApiClient"
import type { ExtractImagePathMain } from "../../../../shared/utils/extractImagePath"
import type { Locations } from "common-types"

type GetClientLocationsMain = (
  location: Locations["data"][number],
) => LocationsGETRes["locations"][number] | false
type GetClientLocations = (
  extractImagePathMain: ExtractImagePathMain,
) => GetClientLocationsMain

export const getClientLocations: GetClientLocations =
  (extractImagePathMain) => (location) => {
    const {
      id,
      attributes: {
        locationName,
        order,
        photos: { data: photos },
      },
    } = location

    if (!photos.length) return false

    const targetPhotoIdList = photos.map(extractPhotoId)
    const imagePaths = targetPhotoIdList.map(extractImagePathMain)
    // eslint-disable-next-line no-magic-numbers
    const randomIndex = Math.floor(Math.random() * (imagePaths.length - 1))
    // eslint-disable-next-line no-magic-numbers
    const imagePath = imagePaths[randomIndex > -1 ? randomIndex : 0]

    return {
      imageNum: photos.length,
      imagePath,
      locationId: String(id),
      locationName,
      order: typeof order !== "undefined" ? Number(order) : Infinity,
    }
  }
