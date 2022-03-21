import { VFC } from "react"
import { Menu } from "../../../../../../../../../shared/const/Menu"
import { Anchor } from "../../../../../../../../atoms/Anchor"
import { WhiteBackground } from "../../../../../../../../atoms/WhiteBackground"
import { PcAnchorText } from "./components/atoms/PcSubMenu/components/atoms/PcSubMenuItem/components/atoms/PcAnchorText"
import { PcMenuListItem } from "../PcMenuListItem"
import { PcSubMenu } from "./components/atoms/PcSubMenu"

type PcMenuItemProps = Menu & {
  handleHover: () => void
  subMenu?: Menu[]
}

export const PcMenuItem: VFC<PcMenuItemProps> = (props) => {
  const { href, linkText, handleHover, subMenu } = props

  return (
    <PcMenuListItem>
      <WhiteBackground>
        <Anchor href={href}>
          <PcAnchorText onMouseEnter={handleHover}>{linkText}</PcAnchorText>
        </Anchor>
      </WhiteBackground>
      {subMenu && <PcSubMenu subMenu={subMenu} />}
    </PcMenuListItem>
  )
}
