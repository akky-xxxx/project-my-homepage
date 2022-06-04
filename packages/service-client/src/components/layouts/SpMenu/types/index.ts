import type { Menu } from "../../../../shared/const/Menu"

type MenuWithSubMenu = Menu & {
  subMenu?: Menu[]
}

/**
 * @remarks
 * 親から渡す props
 *
 * @param isOpenedMenu - メニューが開いているか否か
 */
export type HoCSpMenuProps = {
  menu: MenuWithSubMenu[]
}

/**
 * @remarks
 * stateless component ( Template ) に渡す props
 *
 * @param handleClickMenuButton - メニューの開閉関数
 * @param handleCloseMenu - メニューを閉じる関数
 * @param isOpenedMenu - メニューが開いているか否か
 * @param menu - menu date
 */
export type SpMenuProps = {
  handleClickMenuButton: () => void
  handleCloseMenu: () => void
  isOpenedMenu: boolean
  menu: MenuWithSubMenu[]
}
