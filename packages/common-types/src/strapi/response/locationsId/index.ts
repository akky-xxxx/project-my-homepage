import { LocationBase, PhotoBase } from "../baseScheme"
import { StrapiItem, StrapiResponse } from "../common"

type Location = LocationBase & {
  photos: {
    data: StrapiItem<Omit<PhotoBase, "photo">>[]
  }
}

export type LocationsId = StrapiResponse<StrapiItem<Location>>
