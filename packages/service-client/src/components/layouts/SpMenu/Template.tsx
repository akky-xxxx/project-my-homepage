import { Fragment, VFC } from "react"
import { Menu } from "./components/atoms/Menu"
import { SpMenuBackground } from "./components/atoms/SpMenuBackground"
import { SpMenuBackgroundWrapper } from "./components/atoms/SpMenuBackgroundWrapper"
import { SpMenuButton } from "./components/atoms/SpMenuButton"
import { SpMenuButtonWrapper } from "./components/atoms/SpMenuButtonWrapper"
import { SpMenuItems } from "./components/atoms/SpMenuItems"
import { SpMenuItemsWrapper } from "./components/atoms/SpMenuItemsWrapper"
import { SpMenuProps } from "./types"

export const Template: VFC<SpMenuProps> = (props) => {
  const { handleClickMenuButton, isOpenedMenu, menu } = props
  return (
    <Fragment>
      <SpMenuButtonWrapper>
        <SpMenuButton
          isOpened={isOpenedMenu}
          handleClickButton={handleClickMenuButton}
        />
      </SpMenuButtonWrapper>

      <Menu isOpened={isOpenedMenu}>
        <SpMenuItemsWrapper>
          <SpMenuItems isOpened={isOpenedMenu} menu={menu} />
        </SpMenuItemsWrapper>
        <SpMenuBackgroundWrapper>
          <SpMenuBackground isOpened={isOpenedMenu} />
        </SpMenuBackgroundWrapper>
      </Menu>
    </Fragment>
  )
}