import { VFC } from "react"
import styled, { css } from "styled-components"
import { Colors } from "../../../shared/const/Colors"
import { Margins } from "../../../shared/const/Margins"
import { PcMainMenuItems } from "../PcMainMenuItems"
import { getTransform } from "./modules/getTransform"
import { MarkerProps, PcMainMenuProps } from "./types"

const { $003989, $bf9963, $f0284f } = Colors
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
  background-color: ${$003989};
  display: flex;
  list-style: none;
  padding: 0;
  position: relative;
`

const MarkerStyle = css<MarkerProps>`
  bottom: 0;
  content: "";
  display: inline-block;
  height: ${Margin8}px;
  position: absolute;
  width: ${({ menuLength }) => css`calc(100% / ${menuLength})`};
  transform: ${getTransform};
  transition: transform 0.3s;
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
