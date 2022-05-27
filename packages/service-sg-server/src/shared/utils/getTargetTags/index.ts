import { Photos, Tags } from "common-types"

import { TagsIdGETRes } from "../../../libs/bffApiClient"
import { hasSameId } from "../hasSameId"

type GetTargetTagsMain = (
  relatedTag: Photos["data"][number]["attributes"]["tags"]["data"][number],
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
