import styled, { css } from "styled-components"

import { Colors } from "../../../shared/const/Colors"
import { Margins } from "../../../shared/const/Margins"
import { PcMainMenuItems } from "./components/atoms/PcMainMenuItems"
import { getTransform } from "./modules/getTransform"

import type { MarkerProps, PcMainMenuProps } from "./types"
import type { FC } from "react"

const { $bf9963, $f0284f } = Colors
const { Margin8 } = Margins

export const Template: FC<PcMainMenuProps> = (props) => {
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
  top: 42px;
  transform: ${getTransform};
  transition: transform 0.3s;
  width: ${({ menuLength }) => `calc(100% / ${menuLength})`};
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
