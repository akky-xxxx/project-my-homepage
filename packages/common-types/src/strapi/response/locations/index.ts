import { LocationBase, PhotoBase } from "../baseScheme"
import { StrapiItem, StrapiResponse } from "../common"

type Location = LocationBase & {
  photos: {
    data: StrapiItem<PhotoBase>[]
  }
}

export type Locations = StrapiResponse<StrapiItem<Location>[]>
