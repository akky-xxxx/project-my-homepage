import { extractPhotoId } from "../../../../shared/utils/extractPhotoId"
import { getRandomImage } from "../../../../shared/utils/getRandomImage"

import type { TagsGETRes } from "../../../../libs/bffApiClient"
import type { ExtractImagePathMain } from "../../../../shared/utils/extractImage"
import type { Tags } from "common-types"

type GetClientTagMain = (
  tag: Tags["data"][number],
) => TagsGETRes["tags"][number] | false
type GetClientTag = (
  extractImagePathMain: ExtractImagePathMain,
) => GetClientTagMain

export const getClientTag: GetClientTag = (extractImagePathMain) => (tag) => {
  const {
    id,
    attributes: {
      tagName,
      photos: { data: photos },
    },
  } = tag

  if (!photos.length) return false

  const targetPhotoIdList = photos.map(extractPhotoId)
  const imagePaths = targetPhotoIdList.map(extractImagePathMain)
  const imagePath = getRandomImage(imagePaths)

  return {
    imageNum: photos.length,
    imagePath,
    tagId: String(id),
    tagName,
  }
}
