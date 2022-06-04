import type { PcMainMenuItems } from "../components/atoms/PcMainMenuItems"
import type { ComponentProps } from "react"

type PcMainMenuItemsProps = ComponentProps<typeof PcMainMenuItems>

/**
 * @remarks
 * 親から渡す props
 *
 * @param currentPagePosition - 現在ページのポジション
 * @param menuData - menu data
 */
export type HoCPcMainMenuProps = {
  currentPagePosition: number
  menuData: Omit<PcMainMenuItemsProps, "handleHover">["menuData"]
}

/**
 * @remarks
 * stateless component ( Template ) に渡す props
 *
 * @param currentPagePosition - 現在ページのポジション
 * @param markerPosition - マーカーの位置判定用
 */
export type PcMainMenuProps = PcMainMenuItemsProps & {
  currentPagePosition: number
  markerPosition: number
}

export type MarkerProps = {
  menuLength: number
  markerPosition: number
}
