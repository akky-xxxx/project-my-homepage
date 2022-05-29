import type { PhotoBase, TagBase } from "../baseScheme"
import type { StrapiItem, StrapiResponse } from "../common"

type Tag = TagBase & {
  photos: {
    data: StrapiItem<Omit<PhotoBase, "photo">>[]
  }
}

export type Tags = StrapiResponse<StrapiItem<Tag>[]>
