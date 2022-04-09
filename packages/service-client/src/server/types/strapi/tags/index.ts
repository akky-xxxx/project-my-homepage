import { PhotoBase, TagBase } from "../baseScheme"
import { StrapiItem, StrapiResponse } from "../common"

type Tag = TagBase & {
  photos: {
    data: StrapiItem<PhotoBase>[]
  }
}

export type Photos = StrapiResponse<StrapiItem<Tag>[]>
