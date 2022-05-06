import { PhotoBase, TagBase } from "../baseScheme"
import { StrapiItem, StrapiResponse } from "../common"

type Tag = TagBase & {
  photos: {
    data: StrapiItem<Omit<PhotoBase, "photo">>[]
  }
}

export type Tags = StrapiResponse<StrapiItem<Tag>[]>
