import type { LocationBase, RelatedPhotos } from "../baseScheme"
import type { StrapiItem, StrapiResponse } from "../common"

type Location = RelatedPhotos<LocationBase>

export type LocationsId = StrapiResponse<StrapiItem<Location>>
