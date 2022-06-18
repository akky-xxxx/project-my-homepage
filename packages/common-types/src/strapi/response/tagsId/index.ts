import type { RelatedPhotos, TagBase } from "../baseScheme"
import type { StrapiItem, StrapiResponse } from "../common"

type Tag = RelatedPhotos<TagBase>

export type TagsId = StrapiResponse<StrapiItem<Tag>>
