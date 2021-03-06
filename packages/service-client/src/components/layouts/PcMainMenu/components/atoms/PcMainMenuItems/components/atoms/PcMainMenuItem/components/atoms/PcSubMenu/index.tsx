import styled from "styled-components"

import { PcSubMenuItem } from "./components/atoms/PcSubMenuItem"

import type { Menu } from "../../../../../../../../../../../../shared/const/Menu"
import type { FC } from "react"

type PcSubMenuProps = {
  subMenu: Menu[]
}

export const PcSubMenu: FC<PcSubMenuProps> = (props) => {
  const { subMenu } = props

  return (
    <StyledUl>
      {subMenu.map((subMenuData) => {
        const { href, linkText } = subMenuData
        return <PcSubMenuItem key={href} href={href} linkText={linkText} />
      })}
    </StyledUl>
  )
}

const StyledUl = styled.ul`
  left: 0;
  position: absolute;
  right: 0;
  transition: top 0.3s;
  z-index: -1;
`
