import { UrlMap } from "../../../shared/const/UrlMap"

export const getPageName = (path: string) => {
  if (path === UrlMap.Home) return "Home"
  if (path === UrlMap.PhotoGallery) return "Photo Gallery"
  if (path === UrlMap.PhotoGalleryLocationList) return "Locations/Photo Gallery"
  if (path.startsWith(UrlMap.PhotoGalleryLocationDetail.replace("{id}", "")))
    return "Location/Photo Gallery"

  return "Unknown"
}
