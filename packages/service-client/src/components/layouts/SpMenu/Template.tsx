import { Fragment, VFC } from "react"
import { SpMenuBackground } from "../SpMenuBackground"
import { SpMenuButton } from "../SpMenuButton"
import { SpMenuItems } from "../SpMenuItems"
import { Menu } from "./components/atoms/Menu"
import { SpMenuBackgroundWrapper } from "./components/atoms/SpMenuBackgroundWrapper"
import { SpMenuButtonWrapper } from "./components/atoms/SpMenuButtonWrapper"
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
