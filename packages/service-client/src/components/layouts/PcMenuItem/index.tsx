import Link from "next/link"
import { VFC } from "react"
import { Menu } from "../../../shared/const/Menu"
import { PcAnchor } from "../PcAnchor"
import { PcMenuListItem } from "../PcMenuListItem"
import { isExternal } from "../../../shared/utils/isExternal"
import { AnchorBack } from "../AnchorBack"

type PcMenuItemProps = Menu & {
  handleHover: () => void
}

export const PcMenuItem: VFC<PcMenuItemProps> = (props) => {
  const { href, linkText, handleHover } = props

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
      </PcMenuListItem>
    )

  return (
    <PcMenuListItem>
      <AnchorBack>
        <Link href={href} passHref>
          <PcAnchor onMouseEnter={handleHover}>{linkText}</PcAnchor>
        </Link>
      </AnchorBack>
    </PcMenuListItem>
  )
}
