import MenuIcon from "@mui/icons-material/Menu"
import { AppBar, IconButton, Toolbar } from "@mui/material"
import { VFC } from "react"

/**
 * @type HeaderBarProps
 * @property handleOpenMenu - function of open menu
 */
export type HeaderBarProps = {
  handleOpenMenu: () => void
}

export const HeaderBar: VFC<HeaderBarProps> = (props) => {
  const { handleOpenMenu } = props
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 0 }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleOpenMenu}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
