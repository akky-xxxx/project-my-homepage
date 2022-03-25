import { VFC } from "react"
import styled from "styled-components"
import { Menu } from "../../../../../../shared/const/Menu"
import { Anchor } from "../../../../../atoms/Anchor"
import { MainMenuLi } from "./components/atoms/MainMenuLi"
import { MainMenuLinkText } from "./components/atoms/MainMenuLinkText"
import { MainMenuUl } from "./components/atoms/MainMenuUl"
import { SpSubMenuItems } from "./components/atoms/SpSubMenuItems"

type MenuWithSubMenu = Menu & {
  subMenu?: Menu[]
}

type SpMenuItemsProps = {
  isOpened: boolean
  menu: MenuWithSubMenu[]
}

export const SpMenuItems: VFC<SpMenuItemsProps> = (props) => {
  const { isOpened, menu } = props

  return (
    <Wrapper className={isOpened ? "is-opened" : ""}>
      <MainMenuUl>
        {menu.map((menuData) => {
          const { href: menuHref, linkText: menuLinkText, subMenu } = menuData

          return (
            <MainMenuLi key={menuHref}>
              <Anchor href={menuHref}>
                <MainMenuLinkText>{menuLinkText}</MainMenuLinkText>
              </Anchor>

              {subMenu && <SpSubMenuItems subMenu={subMenu} />}
            </MainMenuLi>
          )
        })}
      </MainMenuUl>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;

  &.is-opened {
    opacity: 1;
    pointer-events: inherit;
    transition-delay: 0.3s;
  }
`
