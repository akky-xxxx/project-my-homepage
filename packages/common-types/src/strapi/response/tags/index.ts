import { PhotoBase, TagBase } from "../baseScheme"
import { StrapiItem, StrapiResponse } from "../common"

type Tag = TagBase & {
  photos: {
    data: StrapiItem<PhotoBase>[]
  }
}

export type Tags = StrapiResponse<StrapiItem<Tag>[]>
