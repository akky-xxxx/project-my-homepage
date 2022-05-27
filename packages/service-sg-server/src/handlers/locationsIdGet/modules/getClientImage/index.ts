import { Photos, Tags, TagsId } from "common-types"
import { format } from "date-fns"

import { LocationsIdGETRes } from "../../../../libs/bffApiClient"
import { DateFnsFormats } from "../../../../shared/const/DateFns"
import { getTargetTags } from "../../../../shared/utils/getTargetTags"
import { hasSameId } from "../../../../shared/utils/hasSameId"

const { VIEW, YEAR_MONTH } = DateFnsFormats

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

    return {
      imageId: String(photoId),
      imagePath: targetPhoto.attributes.photo.data.attributes.formats.large.url,
      tags: targetPhoto.attributes.tags.data.map(getTargetTagsMain),
      takenAt: {
        viewTakenAt: format(dateTakenAt, VIEW),
        yearMonth: format(dateTakenAt, YEAR_MONTH),
      },
    }
  }
}
