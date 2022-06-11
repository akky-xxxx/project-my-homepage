import type { PhotoGalleryGETRes } from "../../../../libs/bffApiClient"

type sortTarget = Pick<PhotoGalleryGETRes["images"][number], "takenAt">

type SortDefault = (a: sortTarget, b: sortTarget) => number

export const sortDefault: SortDefault = (a, b) => {
  const aDate = new Date(a.takenAt)
  const bDate = new Date(b.takenAt)
  if (aDate > bDate) return -1
  if (bDate > aDate) return 1
  return 0
}
