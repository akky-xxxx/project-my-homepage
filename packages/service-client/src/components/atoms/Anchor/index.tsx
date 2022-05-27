import Link from "next/link"
import styled from "styled-components"

import { FontWeights } from "../../../shared/const/FontWeights"
import { FcWithChildren } from "../../../shared/types/react"
import { isExternal } from "./modules/isExternal"

type AnchorProps = {
  handleClick: (() => void) | null
  href: string
}

export const Anchor: FcWithChildren<AnchorProps> = (props) => {
  const { children, handleClick, href } = props

  if (handleClick) {
    return <StyledButton type="button" onClick={handleClick}>{children}</StyledButton>
  }

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

const StyledButton = styled.button.attrs({ type: "button" })`
  appearance: none;
  background: none;
  border: none;
  font-weight: ${FontWeights.Bold};
`
