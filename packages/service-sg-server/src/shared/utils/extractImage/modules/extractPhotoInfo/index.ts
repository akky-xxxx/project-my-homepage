import type { Photos } from "common-types"

type ExtractPhotoInfo = (photo: Photos["data"][number]) => Record<
  "height" | "width",
  number
> & {
  url: string
}

export const extractPhotoInfo: ExtractPhotoInfo = (photo) => {
  const { height, url, width } =
    photo.attributes.photo.data.attributes.formats.large
  return { height, url, width }
}
