import type { RelatedPhotos, LocationBase } from "../baseScheme"
import type { StrapiItem, StrapiResponse } from "../common"

type Location = RelatedPhotos<LocationBase>

export type Locations = StrapiResponse<StrapiItem<Location>[]>
