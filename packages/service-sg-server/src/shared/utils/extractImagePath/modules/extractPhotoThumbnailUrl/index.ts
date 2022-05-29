import type { Photos } from "common-types"

type ExtractPhotoThumbnailUrl = (photo: Photos["data"][number]) => string

export const extractPhotoThumbnailUrl: ExtractPhotoThumbnailUrl = (photo) =>
  photo.attributes.photo.data.attributes.formats.thumbnail.url
