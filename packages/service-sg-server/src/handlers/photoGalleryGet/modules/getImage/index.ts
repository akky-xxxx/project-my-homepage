import { Photos } from "common-types"
import { format } from "date-fns"
import { PhotoGalleryGETRes } from "../../../../libs/bffApiClient"
import { DateFnsFormats } from "../../../../shared/const/DateFns"

const { VIEW } = DateFnsFormats

type GetImage = (
  cardRecord: Photos["data"][number],
) => PhotoGalleryGETRes["images"][number]

export const getImage: GetImage = (cardRecord) => {
  const {
    id,
    attributes: {
      location: {
        data: {
          attributes: { locationName },
        },
      },
      photo: {
        data: {
          attributes: {
            formats: {
              medium: { height, url, width },
            },
          },
        },
      },
      takenAt: originTakenAt,
    },
  } = cardRecord
  const datedOriginTakenAt = new Date(originTakenAt)
  const imagePath = `${process.env.STRAPI_SERVER || ""}${url}`
  const viewTakenAt = format(datedOriginTakenAt, VIEW)
  return {
    height,
    imageId: String(id),
    imagePath,
    locationName,
    takenAt: viewTakenAt,
    width,
  }
}
