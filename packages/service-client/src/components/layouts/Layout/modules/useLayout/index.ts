import { useState } from "react"
import { HoCLayoutProps, LayoutProps } from "../../types"

type UseLayout = (arguments_: HoCLayoutProps) => LayoutProps

export const useLayout: UseLayout = (arguments_) => {
  const { route } = arguments_
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleOpenMenu = () => {
    setMenuOpen(true)
  }
  const handleCloseMenu = () => {
    setMenuOpen(false)
  }
  return { handleCloseMenu, handleOpenMenu, isMenuOpen, route }
}
