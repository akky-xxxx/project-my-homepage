import { Photos } from "common-types"

import { extractPhotoThumbnailUrl } from "./modules/extractPhotoThumbnailUrl"
import { isSamePhotoId } from "./modules/isSamePhotoId"

export type ExtractImagePathMain = (targetPhotoId: number) => string
type ExtractImagePath = (photoList: Photos["data"]) => ExtractImagePathMain

export const extractImagePath: ExtractImagePath =
  (photoList) => (targetPhotoId) => {
    const isSamePhotoIdMain = isSamePhotoId(targetPhotoId)
    const targetPhoto = photoList.find(isSamePhotoIdMain)
    if (!targetPhoto) return ""
    return extractPhotoThumbnailUrl(targetPhoto)
  }
