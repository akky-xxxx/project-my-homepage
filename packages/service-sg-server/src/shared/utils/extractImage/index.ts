import { extractPhotoInfo } from "./modules/extractPhotoInfo"
import { isSamePhotoId } from "./modules/isSamePhotoId"

import type { Photos } from "common-types"

export type ExtractImageMain = (
  targetPhotoId: number,
) => ReturnType<typeof extractPhotoInfo>
type ExtractImage = (photoList: Photos["data"]) => ExtractImageMain

export const extractImage: ExtractImage = (photoList) => (targetPhotoId) => {
  const isSamePhotoIdMain = isSamePhotoId(targetPhotoId)
  const targetPhoto = photoList.find(isSamePhotoIdMain)
  if (!targetPhoto)
    return {
      height: 0,
      url: "",
      width: 0,
    }
  return extractPhotoInfo(targetPhoto)
}
