import { Fragment, VFC } from "react"

import { SpMenu } from "./components/atoms/SpMenu"
import { SpMenuBackground } from "./components/atoms/SpMenuBackground"
import { SpMenuBackgroundWrapper } from "./components/atoms/SpMenuBackgroundWrapper"
import { SpMenuBar } from "./components/atoms/SpMenuBar"
import { SpMenuButton } from "./components/atoms/SpMenuButton"
import { SpMenuButtonWrapper } from "./components/atoms/SpMenuButtonWrapper"
import { SpMenuItems } from "./components/atoms/SpMenuItems"
import { SpMenuItemsWrapper } from "./components/atoms/SpMenuItemsWrapper"
import { SpMenuProps } from "./types"

export const Template: VFC<SpMenuProps> = (props) => {
  const { handleClickMenuButton, handleCloseMenu, isOpenedMenu, menu } = props
  return (
    <Fragment>
      <SpMenuButtonWrapper>
        <SpMenuButton
          isOpened={isOpenedMenu}
          handleClickButton={handleClickMenuButton}
        />
      </SpMenuButtonWrapper>
      <SpMenuBar />

      <SpMenu isOpened={isOpenedMenu}>
        <SpMenuItemsWrapper>
          <SpMenuItems
            handleCloseMenu={handleCloseMenu}
            isOpened={isOpenedMenu}
            menu={menu}
          />
        </SpMenuItemsWrapper>
        <SpMenuBackgroundWrapper>
          <SpMenuBackground isOpened={isOpenedMenu} />
        </SpMenuBackgroundWrapper>
      </SpMenu>
    </Fragment>
  )
}
