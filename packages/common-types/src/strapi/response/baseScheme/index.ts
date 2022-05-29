import type { Dates, StrapiItem } from "../common"

// Photo
type Rectangle = Record<"height" | "width", number>

type PhotoFormatTypes = "large" | "medium" | "small" | "thumbnail"

type PhotoFormat = Rectangle & {
  name: string
  hash: string
  ext: string
  mime: string
  path: null
  size: number
  url: string
}

type PhotoAttributes = Omit<Dates, "publishedAt"> &
  Rectangle & {
    name: string
    alternativeText: string
    caption: string
    formats: Record<PhotoFormatTypes, PhotoFormat>
    hash: string
    mime: string
    ext: string
    mine: string
    size: number
    url: string
  }

export type PhotoBase = Dates & {
  photo: {
    data: StrapiItem<PhotoAttributes>
  }
  takenAt: string
  isShownTop: boolean
}

// Tag
export type TagBase = Omit<Dates, "publishedAt"> & {
  tagName: string
}

// Location
export type LocationBase = Omit<Dates, "publishedAt"> & {
  locationName: string
  locationId: string
}
