import { UrlMap } from "../../../shared/const/UrlMap"

export const getPageName = (path: string) => {
  if (path === UrlMap.Home) return "Home"
  if (path === UrlMap.PhotoGallery) return "Photo Gallery"

  return "Unknown"
}
