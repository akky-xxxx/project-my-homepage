// 保守性のため順番担保
/* eslint-disable sort-keys */
export const UrlMap = {
  Home: "/",
  PhotoGallery: "/photo-gallery",
  PhotoGalleryLocationList: "/photo-gallery/locations",
  PhotoGalleryLocationDetail: "/photo-gallery/location/{id}",
  PhotoGalleryDateList: "/photo-gallery/year-months",
  PhotoGalleryDateDetail: "/photo-gallery/year-month/{id}",
  PhotoGalleryTagList: "/photo-gallery/tags",
  PhotoGalleryTagDetail: "/photo-gallery/tag/{id}",
} as const
