import Link from "next/link"
import { VFC } from "react"
import styled from "styled-components"
import { Colors } from "../../../shared/const/Colors"
import { Margins } from "../../../shared/const/Margins"
import { isExternal } from "./modules/isExternal"

const { $003989, $ffffff } = Colors
const { Margin16, Margin20 } = Margins

type PcMenuItemProps = {
  handleHover: () => void
  href: string
  linkText: string
}

export const PcMenuItem: VFC<PcMenuItemProps> = (props) => {
  const { href, linkText, handleHover } = props

  if (isExternal(href))
    return (
      <StyledLi>
        <Anchor
          href={href}
          target="_blank"
          rel="noopener"
          onMouseEnter={handleHover}
        >
          {linkText}
        </Anchor>
      </StyledLi>
    )

  return (
    <StyledLi>
      <Link href={href} passHref>
        <Anchor onMouseEnter={handleHover}>{linkText}</Anchor>
      </Link>
    </StyledLi>
  )
}

const StyledLi = styled.li`
  background-color: ${$ffffff};
  flex-grow: 1;
`

const Anchor = styled.a`
  background-color: ${$003989};
  color: ${$ffffff};
  display: block;
  padding: ${Margin16}px ${Margin20}px;
  text-align: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`
