import { FC } from "react"

import { Menu } from "../../../../../../../../../../../../../../../shared/const/Menu"
import { Anchor } from "../../../../../../../../../../../../../../atoms/Anchor"
import { WhiteBackground } from "../../../../../../../../../../../../../../atoms/WhiteBackground"
import { PcMainMenuListItem } from "../../../../PcMainMenuListItem"
import { PcAnchorText } from "./components/atoms/PcAnchorText"

type PcSubMenuItemProps = Menu

export const PcSubMenuItem: FC<PcSubMenuItemProps> = (props) => {
  const { href, linkText } = props

  return (
    <PcMainMenuListItem>
      <WhiteBackground>
        <Anchor href={href}>
          <PcAnchorText>{linkText}</PcAnchorText>
        </Anchor>
      </WhiteBackground>
    </PcMainMenuListItem>
  )
}
