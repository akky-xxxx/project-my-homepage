import { Locations, Photos, Tags, TagsId } from "common-types"
import { format } from "date-fns"
import { nanoid } from "nanoid"

import { TagsIdGETRes } from "../../../../libs/bffApiClient"
import { DateFnsFormats } from "../../../../shared/const/DateFns"
import { Strapi } from "../../../../shared/const/strapi"
import { getTargetTags } from "../../../../shared/utils/getTargetTags"
import { hasSameId } from "../../../../shared/utils/hasSameId"

const { VIEW, YEAR_MONTH } = DateFnsFormats

type GetClientImageMainReturn = TagsIdGETRes["images"][number]
type GetClientImageMain = (
  photo: TagsId["data"]["attributes"]["photos"]["data"][number],
) => GetClientImageMainReturn
type GetClientImageArguments = {
  locations: Locations["data"]
  photos: Photos["data"]
  tags: Tags["data"]
}
type GetClientImage = (
  getClientImageArguments: GetClientImageArguments,
) => GetClientImageMain

export const getClientImage: GetClientImage = (getClientImageArguments) => {
  const { locations, photos, tags } = getClientImageArguments

  return (photo) => {
    const { id: photoId } = photo
    const hasSamePhotoId = hasSameId(photoId)
    const targetPhoto = photos.find(hasSamePhotoId)

    if (!targetPhoto) {
      throw new Error("targetPhoto がありません")
    }

    const hasSameLocationId = hasSameId(
      // TODO: 型定義が間違ってるが、 nullable なため optional chaining が必要
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      targetPhoto.attributes.location.data?.id || Strapi.UNKNOWN_ID,
    )
    const location = locations.find(hasSameLocationId)
    const dateTakenAt = new Date(targetPhoto.attributes.takenAt)
    const getTargetTagsMain = getTargetTags(tags)

    return {
      imageId: String(photoId),
      imagePath: targetPhoto.attributes.photo.data.attributes.formats.large.url,
      location: {
        locationId: location?.attributes.locationId || `unknown-${nanoid()}`,
        locationName: location?.attributes.locationName || "unknown",
      },
      tags: targetPhoto.attributes.tags.data.map(getTargetTagsMain),
      takenAt: {
        viewTakenAt: format(dateTakenAt, VIEW),
        yearMonth: format(dateTakenAt, YEAR_MONTH),
      },
    }
  }
}
