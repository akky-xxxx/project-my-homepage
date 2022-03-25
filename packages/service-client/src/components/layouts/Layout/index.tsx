import { FC, Fragment } from "react"
import styled from "styled-components"
import { Menu } from "../../../shared/const/Menu"
import { PcMainMenu } from "../PcMainMenu"
import { SpMenu } from "../SpMenu"
import { MediaQuery } from "../../../shared/const/MediaQuery"
import { Margins } from "../../../shared/const/Margins"

const { Margin12, Margin20 } = Margins

type MenuWithSubMenu = Menu & {
  subMenu?: Menu[]
}

type LayoutProps = {
  currentPagePosition: number
  menu: MenuWithSubMenu[]
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children, currentPagePosition, menu } = props

  return (
    <Fragment>
      <StyledDiv className="is-only-pc">
        <PcMainMenu menuData={menu} currentPagePosition={currentPagePosition} />
      </StyledDiv>
      <StyledDiv className="is-only-tb">
        <SpMenu menu={menu} />
      </StyledDiv>
      <StyledMain>{children}</StyledMain>
    </Fragment>
  )
}

const StyledDiv = styled.div`
  position: relative;
  z-index: 10;
`

const StyledMain = styled.main`
  position: relative;
  z-index: 1;

  ${MediaQuery.Pc} {
    padding: ${Margin20}px;
  }
  ${MediaQuery.Tb} {
    padding: ${90 + Margin12}px ${Margin12}px ${Margin12}px;
  }
`
