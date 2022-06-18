import { extractPhotoId } from "../../../../shared/utils/extractPhotoId"
import { getRandomImagePath } from "../../../../shared/utils/getRandomImagePath"

import type { TagsGETRes } from "../../../../libs/bffApiClient"
import type { ExtractImagePathMain } from "../../../../shared/utils/extractImagePath"
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
  const imagePath = getRandomImagePath(imagePaths)

  return {
    imageNum: photos.length,
    imagePath,
    tagId: String(id),
    tagName,
  }
}
