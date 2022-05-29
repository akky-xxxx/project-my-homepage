import { Anchor } from "../../../../../../../../atoms/Anchor"
import { SubMenuLi } from "./components/atoms/SubMenuLi"
import { SubMenuLinkText } from "./components/atoms/SubMenuLinkText"

import type { Menu } from "../../../../../../../../../shared/const/Menu"
import type { FC } from "react"

type SpSubMenuItemsProps = {
  subMenu: Menu[]
}

export const SpSubMenuItems: FC<SpSubMenuItemsProps> = (props) => {
  const { subMenu } = props

  return (
    <ul>
      {subMenu.map((subMenuData) => {
        const { href: subMenuHref, linkText: subMenuLinkText } = subMenuData

        return (
          <SubMenuLi key={subMenuHref}>
            <Anchor href={subMenuHref}>
              <SubMenuLinkText>{subMenuLinkText}</SubMenuLinkText>
            </Anchor>
          </SubMenuLi>
        )
      })}
    </ul>
  )
}
