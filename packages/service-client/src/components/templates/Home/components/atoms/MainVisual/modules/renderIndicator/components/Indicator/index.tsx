import styled from "styled-components"
import { getBackgroundColor } from "./modules/getBackgroundColor"
import { getPointerEventsValue } from "./modules/getPointerEventsValue"
import { getRotateValue } from "./modules/getRotateValue"
import { IndicatorProps } from "./types"

export const Indicator = styled.button<IndicatorProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 20px;
  pointer-events: ${getPointerEventsValue};
  position: relative;
  transition: opacity 0.2s, color 0.2s;
  width: 20px;

  &::before,
  &::after {
    background-color: ${getBackgroundColor};
    bottom: 0;
    content: "";
    display: inline-block;
    height: 20px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(${getRotateValue});
    transition: transform 0.2s;
    width: 3px;
  }

  &:hover {
    opacity: 0.5;
  }

  &::before {
    height: 20px;
    width: 3px;
  }

  &::after {
    height: 3px;
    width: 20px;
  }
`
