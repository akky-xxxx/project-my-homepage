import Link from "next/link"
import { VFC } from "react"
import { Menu } from "../../../shared/const/Menu"
import { PcAnchor } from "../PcAnchor"
import { PcMenuListItem } from "../PcMenuListItem"
import { isExternal } from "../../../shared/utils/isExternal"

type PcMenuItemProps = Menu & {
  handleHover: () => void
}

export const PcMenuItem: VFC<PcMenuItemProps> = (props) => {
  const { href, linkText, handleHover } = props

  if (isExternal(href))
    return (
      <PcMenuListItem>
        <PcAnchor
          href={href}
          target="_blank"
          rel="noopener"
          onMouseEnter={handleHover}
        >
          {linkText}
        </PcAnchor>
      </PcMenuListItem>
    )

  return (
    <PcMenuListItem>
      <Link href={href} passHref>
        <PcAnchor onMouseEnter={handleHover}>{linkText}</PcAnchor>
      </Link>
    </PcMenuListItem>
  )
}
