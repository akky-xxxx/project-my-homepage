import { extractPhotoId } from "../../../../shared/utils/extractPhotoId"
import { getRandomImagePath } from "../../../../shared/utils/getRandomImagePath"
import { separateDigit } from "../../../../shared/utils/separateDigit"

import type { LocationsGETRes } from "../../../../libs/bffApiClient"
import type { ExtractImagePathMain } from "../../../../shared/utils/extractImage"
import type { Locations } from "common-types"

type GetClientLocationsMain = (
  location: Locations["data"][number],
) => LocationsGETRes["images"][number] | false
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
    const imagePath = getRandomImagePath(imagePaths)

    return {
      imageNum: separateDigit(photos.length, { suffix: "枚" }),
      imagePath,
      locationId: String(id),
      locationName,
      order: typeof order !== "undefined" ? Number(order) : Infinity,
    }
  }
