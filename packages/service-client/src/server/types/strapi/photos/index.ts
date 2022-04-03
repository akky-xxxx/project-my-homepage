import { Dates } from "../common"

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

type Photo = {
  id: string
  attributes: PhotoAttributes
}

type Attributes = Dates & {
  photo: {
    data: Photo
  }
  takenAt: string
  tags: unknown
  location: unknown
  isShownTop: boolean
}

type Data = {
  id: string
  attributes: Attributes
}

export type Photos = {
  data: Data[]
}
