import styled from "styled-components"

import { getBackgroundColor } from "./modules/getBackgroundColor"
import { getPointerEventsValue } from "./modules/getPointerEventsValue"
import { getRotateValue } from "./modules/getRotateValue"
import { IndicatorProps } from "./types"

const NarrowWidth = 5
const WideWidth = 20

export const Indicator = styled.button<IndicatorProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: ${WideWidth}px;
  pointer-events: ${getPointerEventsValue};
  position: relative;
  transition: opacity 0.2s, color 0.2s;
  width: ${WideWidth}px;

  &::before,
  &::after {
    background-color: ${getBackgroundColor};
    bottom: 0;
    content: "";
    display: inline-block;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(${getRotateValue});
    transition: transform 0.2s;
  }

  &:hover {
    opacity: 0.5;
  }

  &::before {
    height: ${WideWidth}px;
    width: ${NarrowWidth}px;
  }

  &::after {
    height: ${NarrowWidth}px;
    width: ${WideWidth}px;
  }
`
