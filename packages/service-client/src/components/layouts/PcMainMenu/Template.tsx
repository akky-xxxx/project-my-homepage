import { VFC } from "react"
import styled, { css } from "styled-components"
import { Colors } from "../../../shared/const/Colors"
import { Margins } from "../../../shared/const/Margins"
import { PcMainMenuItems } from "../PcMainMenuItems"
import { getTransform } from "./modules/getTransform"
import { MarkerProps, PcMainMenuProps } from "./types"

const { $bf9963, $f0284f } = Colors
const { Margin8 } = Margins

export const Template: VFC<PcMainMenuProps> = (props) => {
  const { handleHoverMenu, currentPagePosition, markerPosition, menuData } =
    props

  return (
    <Wrapper>
      <MenuWrapper>
        <PcMainMenuItems
          menuData={menuData}
          handleHoverMenu={handleHoverMenu}
        />
      </MenuWrapper>
      <CurrentPageMarker
        menuLength={menuData.length}
        markerPosition={currentPagePosition}
      />
      <Marker menuLength={menuData.length} markerPosition={markerPosition} />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
`

const MenuWrapper = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  position: relative;
`

const MarkerStyle = css<MarkerProps>`
  content: "";
  display: inline-block;
  height: ${Margin8}px;
  pointer-events: none;
  position: absolute;
  transform: ${getTransform};
  top: 48px;
  transition: transform 0.3s;
  width: ${({ menuLength }) => css`calc(100% / ${menuLength})`};
`

const Marker = styled.div<MarkerProps>`
  background-color: ${$bf9963};
  z-index: 10;
  ${MarkerStyle};
`

const CurrentPageMarker = styled.div<MarkerProps>`
  background-color: ${$f0284f};
  z-index: 20;
  ${MarkerStyle};
`
