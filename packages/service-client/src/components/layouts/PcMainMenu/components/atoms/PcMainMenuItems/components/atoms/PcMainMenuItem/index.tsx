import { FC } from "react"

import { Menu } from "../../../../../../../../../shared/const/Menu"
import { Anchor } from "../../../../../../../../atoms/Anchor"
import { WhiteBackground } from "../../../../../../../../atoms/WhiteBackground"
import { PcMainMenuListItem } from "./components/atoms/PcMainMenuListItem"
import { PcSubMenu } from "./components/atoms/PcSubMenu"
import { PcAnchorText } from "./components/atoms/PcSubMenu/components/atoms/PcSubMenuItem/components/atoms/PcAnchorText"

type PcMainMenuItemProps = Menu & {
  handleHover: () => void
  subMenu?: Menu[]
}

export const PcMainMenuItem: FC<PcMainMenuItemProps> = (props) => {
  const { href, linkText, handleHover, subMenu } = props

  return (
    <PcMainMenuListItem>
      <WhiteBackground>
        <Anchor href={href}>
          <PcAnchorText onMouseEnter={handleHover}>{linkText}</PcAnchorText>
        </Anchor>
      </WhiteBackground>
      {subMenu && <PcSubMenu subMenu={subMenu} />}
    </PcMainMenuListItem>
  )
}
