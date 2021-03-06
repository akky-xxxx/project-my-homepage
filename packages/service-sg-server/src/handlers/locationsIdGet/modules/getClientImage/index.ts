import { format } from "date-fns"

import { DateFnsFormats } from "../../../../shared/const/DateFns"
import { getHttpUrl } from "../../../../shared/utils/getHttpUrl"
import { getTargetTags } from "../../../../shared/utils/getTargetTags"
import { hasSameId } from "../../../../shared/utils/hasSameId"

import type { LocationsIdGETRes } from "../../../../libs/bffApiClient"
import type { Photos, Tags, TagsId } from "common-types"

const { VIEW } = DateFnsFormats

type GetClientImageMainReturn = LocationsIdGETRes["images"][number]
type GetClientImageMain = (
  photo: TagsId["data"]["attributes"]["photos"]["data"][number],
) => GetClientImageMainReturn
type GetClientImageArguments = {
  photos: Photos["data"]
  tags: Tags["data"]
}
type GetClientImage = (
  getClientImageArguments: GetClientImageArguments,
) => GetClientImageMain

export const getClientImage: GetClientImage = (getClientImageArguments) => {
  const { photos, tags } = getClientImageArguments

  return (photo) => {
    const { id: photoId } = photo
    const hasSamePhotoId = hasSameId(photoId)
    const targetPhoto = photos.find(hasSamePhotoId)

    if (!targetPhoto) {
      throw new Error("targetPhoto がありません")
    }

    const dateTakenAt = new Date(targetPhoto.attributes.takenAt)
    const getTargetTagsMain = getTargetTags(tags)
    const { url, height, width } =
      targetPhoto.attributes.photo.data.attributes.formats.large

    return {
      height,
      imageId: String(photoId),
      imagePath: getHttpUrl(url),
      tags: targetPhoto.attributes.tags.data?.map(getTargetTagsMain) || [],
      takenAt: format(dateTakenAt, VIEW),
      width,
    }
  }
}
