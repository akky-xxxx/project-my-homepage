/**
 * @type HoCLayoutProps
 * @description 親から渡す props
 * @property route - パス
 */
export type HoCLayoutProps = {
  route: string
}

/**
 * @type LayoutProps
 * @description stateless component ( Template ) に渡す props
 * @property isMenuOpen - メニューが開いているか否か
 * @property handleOpenMenu - メニューを開く関数
 * @property handleCloseMenu - メニューを閉じる関数
 * @property route - パス
 */
export type LayoutProps = {
  isMenuOpen: boolean
  handleOpenMenu: () => void
  handleCloseMenu: () => void
  route: string
}
