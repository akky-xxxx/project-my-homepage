import { Locations } from "common-types"
import { LocationsGETRes } from "../../../../libs/bffApiClient"
import { ExtractImagePathMain } from "../../../../shared/utils/extractImagePath"
import { extractPhotoId } from "../../../../shared/utils/extractPhotoId"
import { getFileUrl } from "../../../../shared/utils/getFileUrl"

type GetClientLocationsMain = (
  location: Locations["data"][number],
) => LocationsGETRes["locations"][number] | false
type GetClientLocations = (
  extractImagePathMain: ExtractImagePathMain,
) => GetClientLocationsMain

export const getClientLocations: GetClientLocations =
  (extractImagePathMain) => (location) => {
    const {
      attributes: {
        locationId,
        locationName,
        photos: { data: photos },
      },
    } = location

    if (!photos.length) return false

    const targetPhotoIdList = photos.map(extractPhotoId)
    const imagePaths = targetPhotoIdList.map(extractImagePathMain)
    // eslint-disable-next-line no-magic-numbers
    const randomIndex = Math.floor(Math.random() * (imagePaths.length - 1))
    // eslint-disable-next-line no-magic-numbers
    const imagePath = getFileUrl(imagePaths[randomIndex > -1 ? randomIndex : 0])

    return {
      imageNum: photos.length,
      imagePath,
      locationId,
      locationName,
    }
  }
