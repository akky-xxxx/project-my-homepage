import { useState } from "react"

import { HoCSpMenuProps, SpMenuProps } from "../../types"

type UseSpMenu = (useSpMenuArguments: HoCSpMenuProps) => SpMenuProps

export const useSpMenu: UseSpMenu = (useSpMenuArguments) => {
  const { menu } = useSpMenuArguments
  const [isOpenedMenu, setOpenedMenu] = useState(false)
  const handleClickMenuButton = () => {
    setOpenedMenu(!isOpenedMenu)
  }
  return { handleClickMenuButton, isOpenedMenu, menu }
}
