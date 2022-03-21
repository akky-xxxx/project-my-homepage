import Link from "next/link"
import { FC } from "react"
import { isExternal } from "../../../shared/utils/isExternal"

type AnchorProps = {
  href: string
}

export const Anchor: FC<AnchorProps> = (props) => {
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
