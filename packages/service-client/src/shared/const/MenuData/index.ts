import { Menu } from "../Menu"
import { UrlMap } from "../UrlMap"

type MenuWithSubMenu = Menu & {
  subMenu?: Menu[]
}

export const MenuData: MenuWithSubMenu[] = [
  {
    href: UrlMap.Home,
    linkText: "Home",
  },
  {
    href: UrlMap.PhotoGallery,
    linkText: "Photo Gallery",
    // TODO: 画面実装したら戻す
    // subMenu: [
    //   {
    //     href: UrlMap.PhotoGalleryLocationList,
    //     linkText: "by location",
    //   },
    //   {
    //     href: UrlMap.PhotoGalleryTagList,
    //     linkText: "by tag",
    //   },
    // ],
  },
  {
    href: "https://github.com/akky-xxxx",
    linkText: "Github",
  },
]
