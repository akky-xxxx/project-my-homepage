import { UrlMap } from "../../../shared/const/UrlMap"

export const getPageName = (path: string, detailName = "Unknown") => {
  if (path === UrlMap.Home) return "Home"
  if (path === UrlMap.PhotoGallery) return "Photo Gallery"
  if (path === UrlMap.PhotoGalleryLocationList) return "Locations/Photo Gallery"
  if (path.startsWith(UrlMap.PhotoGalleryLocationDetail.replace("{id}", "")))
    return `Location - ${detailName}/Photo Gallery`

  return "Unknown"
}
