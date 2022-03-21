import Link from "next/link"
import { VFC } from "react"
import { Menu } from "../../../../../../../../../../../../../../../shared/const/Menu"
import { isExternal } from "../../../../../../../../../../../../../../../shared/utils/isExternal"
import { WhiteBackground } from "../../../../../../../../../../../../../../atoms/WhiteBackground"
import { PcAnchorText } from "../../../../../../../PcAnchorText"
import { PcMenuListItem } from "../../../../../../../PcMenuListItem"

type PcSubMenuItemProps = Menu

export const PcSubMenuItem: VFC<PcSubMenuItemProps> = (props) => {
  const { href, linkText } = props

  if (isExternal(href))
    return (
      <PcMenuListItem>
        <WhiteBackground>
          <PcAnchorText href={href} target="_blank" rel="noopener">
            {linkText}
          </PcAnchorText>
        </WhiteBackground>
      </PcMenuListItem>
    )

  return (
    <PcMenuListItem>
      <WhiteBackground>
        <Link href={href} passHref>
          <PcAnchorText>{linkText}</PcAnchorText>
        </Link>
      </WhiteBackground>
    </PcMenuListItem>
  )
}
