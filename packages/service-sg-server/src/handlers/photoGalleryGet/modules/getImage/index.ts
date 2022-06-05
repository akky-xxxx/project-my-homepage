import { format } from "date-fns"

import { DateFnsFormats } from "../../../../shared/const/DateFns"
import { getHttpUrl } from "../../../../shared/utils/getHttpUrl"

import type { PhotoGalleryGETRes } from "../../../../libs/bffApiClient"
import type { Photos } from "common-types"

const { VIEW } = DateFnsFormats

type GetImage = (
  cardRecord: Photos["data"][number],
) => PhotoGalleryGETRes["images"][number]

export const getImage: GetImage = (cardRecord) => {
  const {
    id,
    attributes: {
      location,
      photo: {
        data: {
          attributes: {
            formats: {
              large: { height, url, width },
            },
          },
        },
      },
      takenAt: originTakenAt,
    },
  } = cardRecord

  if (!location.data) {
    throw new Error(`画像 id: ${id} の location が設定されてません`)
  }

  const {
    data: {
      attributes: { locationName },
    },
  } = location

  const datedOriginTakenAt = new Date(originTakenAt)
  const viewTakenAt = format(datedOriginTakenAt, VIEW)
  const imagePath = getHttpUrl(url)
  return {
    height,
    imageId: String(id),
    imagePath,
    locationName,
    takenAt: viewTakenAt,
    width,
  }
}
