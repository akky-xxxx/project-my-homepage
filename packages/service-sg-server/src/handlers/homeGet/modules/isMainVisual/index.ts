import type { Photos } from "common-types"

type IsMainVisual = (photoInfo: Photos["data"][number]) => boolean

export const isMainVisual: IsMainVisual = (photoInfo) =>
  photoInfo.attributes.isShownTop
