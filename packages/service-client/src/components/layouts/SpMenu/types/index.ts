import { Menu } from "../../../../shared/const/Menu"

type MenuWithSubMenu = Menu & {
  subMenu?: Menu[]
}

/**
 * @type HoCSpMenuProps
 * @description 親から渡す props
 * @property isOpenedMenu - メニューが開いているか否か
 */
export type HoCSpMenuProps = {
  menu: MenuWithSubMenu[]
}

/**
 * @type SpMenuProps
 * @description stateless component ( Template ) に渡す props
 * @property handleClickMenuButton - メニューの開閉関数
 * @property isOpenedMenu - メニューが開いているか否か
 * @property menu - menu date
 */
export type SpMenuProps = {
  handleClickMenuButton: () => void
  isOpenedMenu: boolean
  menu: MenuWithSubMenu[]
}
