import { LocationBase, PhotoBase, TagBase } from "../baseScheme"
import { StrapiItem, StrapiResponse } from "../common"

type Photo = PhotoBase & {
  tags: {
    data: StrapiItem<TagBase>[]
  }
  location: {
    data: StrapiItem<LocationBase>
  }
}

export type Photos = StrapiResponse<StrapiItem<Photo>[]>
