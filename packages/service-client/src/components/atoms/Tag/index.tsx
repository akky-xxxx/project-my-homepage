import styled from "styled-components"

import { Colors } from "../../../shared/const/Colors"

const { $003989, $ffffff, $333333 } = Colors

type TagProps = {
  tagColor?: string
  isLighterTest?: boolean
}

type GetCssValue = (props: TagProps) => string
const getColorValue: GetCssValue = (props) => props.tagColor || $003989
const getTextColorValue: GetCssValue = (props) => {
  const { isLighterTest = true } = props
  return isLighterTest ? $ffffff : $333333
}

export const Tag = styled.span<TagProps>`
  background-color: ${getColorValue};
  border-radius: 5px;
  color: ${getTextColorValue};
  display: inline-block;
  padding: 4px 8px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`
