import { TagBase } from "../../../../../../types/strapi/baseScheme"
import { StrapiItem } from "../../../../../../types/strapi/common"

type GetTagReturn = {
  tagId: string
  tagName: string
}
type GetTag = (tagRecord: StrapiItem<TagBase>) => GetTagReturn

export const getTag: GetTag = (tagRecord) => {
  const {
    id,
    attributes: { tagName },
  } = tagRecord
  const tagId = String(id)
  return { tagId, tagName }
}
