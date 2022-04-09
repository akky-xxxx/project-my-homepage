import { format } from "date-fns"
import { DateFnsFormats } from "../../../../const/DateFns"
import { Photos } from "../../../../types/strapi/photos"
import { getTag } from "./modules/getTag"

const { VIEW, YEAR_MONTH } = DateFnsFormats

// TODO: common-types を作って移動する
export type Location = {
  locationId: string
  locationName: string
}

// TODO: common-types を作って移動する
export type Tag = {
  tagId: string
  tagName: string
}

// TODO: common-types を作って移動する
export type TakenAt = {
  yearMonth: string
  viewTakenAt: string
}

type GetCardReturn = {
  imagePath: string
  location: Location
  tags: Tag[]
  takenAt: TakenAt
}

type GetCard = (cardRecord: Photos["data"][number]) => GetCardReturn

export const getCard: GetCard = (cardRecord) => {
  const {
    attributes: {
      location: {
        data: {
          attributes: { locationId, locationName },
        },
      },
      photo: {
        data: {
          attributes: {
            formats: {
              medium: { url },
            },
          },
        },
      },
      takenAt: originTakenAt,
      tags: { data: originTags },
    },
  } = cardRecord
  const datedOriginTakenAt = new Date(originTakenAt)
  const imagePath = `${process.env.STRAPI_SERVER || ""}${url}`
  const viewTakenAt = format(datedOriginTakenAt, VIEW)
  const yearMonth = format(datedOriginTakenAt, YEAR_MONTH)
  const takenAt = { viewTakenAt, yearMonth }
  const location = { locationId, locationName }
  const tags = originTags.map(getTag)
  return {
    imagePath,
    location,
    tags,
    takenAt,
  }
}
