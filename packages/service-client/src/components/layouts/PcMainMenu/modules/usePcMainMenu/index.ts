import { useState } from "react"

import type { HoCPcMainMenuProps, PcMainMenuProps } from "../../types"

const InitialMarkerPosition = 0

type UsePcMainMenu = (
  usePcMainMenuArguments: HoCPcMainMenuProps,
) => PcMainMenuProps

export const usePcMainMenu: UsePcMainMenu = (usePcMainMenuArguments) => {
  const { menuData, currentPagePosition } = usePcMainMenuArguments
  const [markerPosition, setMarkerPosition] = useState(InitialMarkerPosition)
  const handleHoverMenu = (position: number) => {
    setMarkerPosition(position)
  }
  return { currentPagePosition, handleHoverMenu, markerPosition, menuData }
}
