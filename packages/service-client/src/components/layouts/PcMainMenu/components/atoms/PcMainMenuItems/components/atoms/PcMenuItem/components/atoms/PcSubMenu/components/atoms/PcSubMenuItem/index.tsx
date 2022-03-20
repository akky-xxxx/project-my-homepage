import Link from "next/link"
import { VFC } from "react"
import { Menu } from "../../../../../../../../../../../../../../../shared/const/Menu"
import { isExternal } from "../../../../../../../../../../../../../../../shared/utils/isExternal"
import { AnchorBack } from "../../../../../../../../../../../../../AnchorBack"
import { PcAnchor } from "../../../../../../../PcAnchor"
import { PcMenuListItem } from "../../../../../../../../../../../../../PcMenuListItem"

type PcSubMenuItemProps = Menu

export const PcSubMenuItem: VFC<PcSubMenuItemProps> = (props) => {
  const { href, linkText } = props

  if (isExternal(href))
    return (
      <PcMenuListItem>
        <AnchorBack>
          <PcAnchor href={href} target="_blank" rel="noopener">
            {linkText}
          </PcAnchor>
        </AnchorBack>
      </PcMenuListItem>
    )

  return (
    <PcMenuListItem>
      <AnchorBack>
        <Link href={href} passHref>
          <PcAnchor>{linkText}</PcAnchor>
        </Link>
      </AnchorBack>
    </PcMenuListItem>
  )
}
