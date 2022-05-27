import Link from "next/link"

import { FcWithChildren } from "../../../shared/types/react"
import { isExternal } from "./modules/isExternal"

type AnchorProps = {
  href: string
}

export const Anchor: FcWithChildren<AnchorProps> = (props) => {
  const { children, href } = props

  if (isExternal(href))
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )

  return (
    <Link href={href} passHref>
      <a>{children}</a>
    </Link>
  )
}
