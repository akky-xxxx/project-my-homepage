import styled from "styled-components"
import { Colors } from "../../../../../../../../../shared/const/Colors"
import { Margins } from "../../../../../../../../../shared/const/Margins"

const { $003989, $ffffff } = Colors
const { Margin16, Margin20 } = Margins

export const PcAnchor = styled.a`
  background-color: ${$003989};
  color: ${$ffffff};
  display: block;
  padding: ${Margin16}px ${Margin20}px;
  text-align: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`
