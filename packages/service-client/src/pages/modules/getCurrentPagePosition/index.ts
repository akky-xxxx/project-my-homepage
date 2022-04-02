import { UrlMap } from "../../../shared/const/UrlMap"

const { Home, PhotoGallery } = UrlMap

// 保守性を担保するため
/* eslint-disable sort-keys */
const Mapper = {
  Home: 0,
  PhotoGallery: 1,
  Other: -1,
} as const
/* eslint-enable sort-keys */

type GetCurrentPagePosition = (route: string) => number

export const getCurrentPagePosition: GetCurrentPagePosition = (route) => {
  if (route.startsWith(PhotoGallery)) return Mapper.PhotoGallery
  if (route === Home) return Mapper.Home
  return Mapper.Other
}
