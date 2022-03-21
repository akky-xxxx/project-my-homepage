import { VFC } from "react"
import { Menu } from "../../../../../../../../../../../../../../../shared/const/Menu"
import { Anchor } from "../../../../../../../../../../../../../../atoms/Anchor"
import { WhiteBackground } from "../../../../../../../../../../../../../../atoms/WhiteBackground"
import { PcAnchorText } from "./components/atoms/PcAnchorText"
import { PcMainMenuListItem } from "../../../../PcMainMenuListItem"

type PcSubMenuItemProps = Menu

export const PcSubMenuItem: VFC<PcSubMenuItemProps> = (props) => {
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
