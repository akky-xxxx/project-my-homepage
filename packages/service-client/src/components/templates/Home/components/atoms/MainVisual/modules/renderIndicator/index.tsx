import React from "react"
import styled from "styled-components"

import { Indicator } from "./components/Indicator"

import type { CarouselProps } from "react-responsive-carousel"

export const renderIndicator: CarouselProps["renderIndicator"] = (
  clickHandler,
  isSelected,
) => (
  <StyledLi>
    <Indicator onClick={clickHandler} isSelected={isSelected} />
  </StyledLi>
)

const StyledLi = styled.li`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
`
