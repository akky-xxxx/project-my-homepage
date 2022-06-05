import { hasSameId } from "../hasSameId"

import type { TagsIdGETRes } from "../../../libs/bffApiClient"
import type { Photos, Tags } from "common-types"

type RelatedTag = Required<
  Photos["data"][number]["attributes"]["tags"]
>["data"][number]
type GetTargetTagsMain = (
  relatedTag: RelatedTag,
) => TagsIdGETRes["images"][number]["tags"][number]
type GetTargetTags = (tags: Tags["data"]) => GetTargetTagsMain

export const getTargetTags: GetTargetTags = (tags) => (relatedTag) => {
  const { id } = relatedTag
  const hasSameTagId = hasSameId(id)

  return {
    tagId: String(id),
    tagName: tags.find(hasSameTagId)?.attributes.tagName || "",
  }
}
