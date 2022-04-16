import { Card, Photos } from "common-types"
import { format } from "date-fns"
import { DateFnsFormats } from "../../../../shared/const/DateFns"
import { getTag } from "./modules/getTag"

const { VIEW, YEAR_MONTH } = DateFnsFormats

type GetCard = (cardRecord: Photos["data"][number]) => Card

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
