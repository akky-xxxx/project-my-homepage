import { Drawer, List } from "@mui/material"
import { VFC } from "react"
import { MenuData } from "../../../shared/const/MenuData"
import { MenuItem } from "../MenuItem"

/**
 * @type MenuDrawerProps
 * @property isMenuOpen - メニューが開いているか否か
 * @property handleCloseMenu - function of close menu
 */
type MenuDrawerProps = {
  isMenuOpen: boolean
  handleCloseMenu: () => void
}

export const MenuDrawer: VFC<MenuDrawerProps> = (props) => {
  const { isMenuOpen, handleCloseMenu } = props

  return (
    <Drawer open={isMenuOpen} onClose={handleCloseMenu}>
      <List>
        {MenuData.map((menuItem) => {
          const { href, linkLabel } = menuItem

          return (
            <MenuItem
              key={href}
              href={href}
              linkLabel={linkLabel}
              handleCloseMenu={handleCloseMenu}
            />
          )
        })}
      </List>
    </Drawer>
  )
}
