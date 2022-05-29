import type { PcMainMenuItems } from "../components/atoms/PcMainMenuItems"
import type { ComponentProps } from "react"

type PcMainMenuItemsProps = ComponentProps<typeof PcMainMenuItems>

/**
 * @type HoCPcMainMenuProps
 * @description 親から渡す props
 * @property currentPagePosition - 現在ページのポジション
 * @property menuData - menu data
 */
export type HoCPcMainMenuProps = {
  currentPagePosition: number
  menuData: Omit<PcMainMenuItemsProps, "handleHover">["menuData"]
}

/**
 * @type PcMainMenuProps
 * @description stateless component ( Template ) に渡す props
 * @property currentPagePosition - 現在ページのポジション
 * @property markerPosition - マーカーの位置判定用
 */
export type PcMainMenuProps = PcMainMenuItemsProps & {
  currentPagePosition: number
  markerPosition: number
}

export type MarkerProps = {
  menuLength: number
  markerPosition: number
}
