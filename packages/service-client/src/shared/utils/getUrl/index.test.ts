import { UrlMap } from "../../const/UrlMap"
import { getUrl } from "./index"

describe("getUrl", () => {
  it.each([
    ["Home"],
    ["PhotoGallery"],
    ["PhotoGalleryLocationDetail"],
  ] as const)(
    "option なしの場合は UrlMap の value をそのまま返す。 key は %s",
    (key) => {
      expect(getUrl(key)).toBe(UrlMap[key])
    },
  )

  it.each([
    ["PhotoGalleryLocationDetail", { id: "1" }, "/photo-gallery/location/1"],
    ["PhotoGalleryDateDetail", { id: "2" }, "/photo-gallery/year-month/2"],
    ["PhotoGalleryTagDetail", { id: "3" }, "/photo-gallery/tag/3"],
  ] as const)(
    "option ありの場合は option で UrlMap の置換文字を置き換える",
    (key, option, expectedValue) => {
      expect(getUrl(key, option)).toBe(expectedValue)
    },
  )
})
