import { extractPhotoId } from "../../../../shared/utils/extractPhotoId"
import { getHttpUrl } from "../../../../shared/utils/getHttpUrl"
import { getRandomImage } from "../../../../shared/utils/getRandomImage"
import { separateDigit } from "../../../../shared/utils/separateDigit"

import type { LocationsGETRes } from "../../../../libs/bffApiClient"
import type { ExtractImageMain } from "../../../../shared/utils/extractImage"
import type { Locations } from "common-types"

type GetClientLocationsMain = (
  location: Locations["data"][number],
) => LocationsGETRes["images"][number] | false
type GetClientLocations = (
  extractImagePathMain: ExtractImageMain,
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
    const imageInfoList = targetPhotoIdList.map(extractImagePathMain)
    const { url, height, width } = getRandomImage(imageInfoList)

    return {
      height,
      imageNum: separateDigit(photos.length, { suffix: "枚" }),
      imagePath: getHttpUrl(url),
      locationId: String(id),
      locationName,
      order: typeof order !== "undefined" ? Number(order) : Infinity,
      width,
    }
  }
