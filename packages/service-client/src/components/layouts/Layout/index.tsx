import { Fragment } from "react"
import styled from "styled-components"
import { Margins } from "../../../shared/const/Margins"
import { MediaQuery } from "../../../shared/const/MediaQuery"
import { Menu } from "../../../shared/const/Menu"
import { FcWithChildren } from "../../../shared/types/react"
import { PcMainMenu } from "../PcMainMenu"
import { SpMenu } from "../SpMenu"

const { Margin12, Margin20 } = Margins
const HeaderBuffer = 90

type MenuWithSubMenu = Menu & {
  subMenu?: Menu[]
}

type LayoutProps = {
  currentPagePosition: number
  menu: MenuWithSubMenu[]
}

export const Layout: FcWithChildren<LayoutProps> = (props) => {
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
    margin: ${Margin20}px;
  }

  ${MediaQuery.Tb} {
    margin: ${HeaderBuffer + Margin12}px ${Margin12}px ${Margin12}px;
  }
`
