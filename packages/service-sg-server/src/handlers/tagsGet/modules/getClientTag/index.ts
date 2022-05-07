import { Tags } from "common-types"
import { TagsGETRes } from "../../../../libs/bffApiClient"
import { getFileUrl } from "../../../../shared/utils/getFileUrl"
import { ExtractImagePathMain } from "../extractImagePath"
import { extractPhotoId } from "./modules/extractPhotoId"

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
  // eslint-disable-next-line no-magic-numbers
  const randomIndex = Math.floor(Math.random() * (imagePaths.length - 1))
  // eslint-disable-next-line no-magic-numbers
  const imagePath = getFileUrl(imagePaths[randomIndex > -1 ? randomIndex : 0])

  return {
    imageNum: photos.length,
    imagePath,
    tagId: String(id),
    tagName,
  }
}