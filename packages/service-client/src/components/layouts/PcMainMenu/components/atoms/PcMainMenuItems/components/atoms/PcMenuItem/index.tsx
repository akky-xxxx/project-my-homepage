import Link from "next/link"
import { VFC } from "react"
import { Menu } from "../../../../../../../../../shared/const/Menu"
import { isExternal } from "../../../../../../../../../shared/utils/isExternal"
import { WhiteBackground } from "../../../../../../../../atoms/WhiteBackground"
import { PcAnchor } from "../PcAnchor"
import { PcMenuListItem } from "../PcMenuListItem"
import { PcSubMenu } from "./components/atoms/PcSubMenu"

type PcMenuItemProps = Menu & {
  handleHover: () => void
  subMenu?: Menu[]
}

export const PcMenuItem: VFC<PcMenuItemProps> = (props) => {
  const { href, linkText, handleHover, subMenu } = props

  if (isExternal(href))
    return (
      <PcMenuListItem>
        <WhiteBackground>
          <PcAnchor
            href={href}
            target="_blank"
            rel="noopener"
            onMouseEnter={handleHover}
          >
            {linkText}
          </PcAnchor>
        </WhiteBackground>
        {subMenu && <PcSubMenu subMenu={subMenu} />}
      </PcMenuListItem>
    )

  return (
    <PcMenuListItem>
      <WhiteBackground>
        <Link href={href} passHref>
          <PcAnchor onMouseEnter={handleHover}>{linkText}</PcAnchor>
        </Link>
      </WhiteBackground>
      {subMenu && <PcSubMenu subMenu={subMenu} />}
    </PcMenuListItem>
  )
}
