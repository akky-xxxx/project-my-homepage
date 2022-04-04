import { Dates, StrapiItem, StrapiResponse } from "../common"

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
    ext: string
    mine: string
    size: string
    url: string
  }

export type PhotoBase = Dates & {
  photo: {
    data: StrapiItem<PhotoAttributes>
  }
  takenAt: string
  isShownTop: boolean
}

type Attributes = PhotoBase & {
  tags: unknown
  location: unknown
}

export type Photos = StrapiResponse<StrapiItem<Attributes>[]>
