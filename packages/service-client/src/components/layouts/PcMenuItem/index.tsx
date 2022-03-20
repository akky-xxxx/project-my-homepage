import Link from "next/link"
import { VFC } from "react"
import { Menu } from "../../../shared/const/Menu"
import { isExternal } from "../../../shared/utils/isExternal"
import { AnchorBack } from "../AnchorBack"
import { PcAnchor } from "../PcAnchor"
import { PcMenuListItem } from "../PcMenuListItem"
import { PcSubMenu } from "../PcSubMenu"

type PcMenuItemProps = Menu & {
  handleHover: () => void
  subMenu?: Menu[]
}

export const PcMenuItem: VFC<PcMenuItemProps> = (props) => {
  const { href, linkText, handleHover, subMenu } = props

  if (isExternal(href))
    return (
      <PcMenuListItem>
        <AnchorBack>
          <PcAnchor
            href={href}
            target="_blank"
            rel="noopener"
            onMouseEnter={handleHover}
          >
            {linkText}
          </PcAnchor>
        </AnchorBack>
        {subMenu && <PcSubMenu subMenu={subMenu} />}
      </PcMenuListItem>
    )

  return (
    <PcMenuListItem>
      <AnchorBack>
        <Link href={href} passHref>
          <PcAnchor onMouseEnter={handleHover}>{linkText}</PcAnchor>
        </Link>
      </AnchorBack>
      {subMenu && <PcSubMenu subMenu={subMenu} />}
    </PcMenuListItem>
  )
}
