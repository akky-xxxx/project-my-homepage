import styled from "styled-components"
import { Margins } from "../../../../../../../../../shared/const/Margins"

const { Margin20 } = Margins

export const StyledFigcaption = styled.figcaption`
  background: rgba(255, 255, 255, 90%);
  bottom: 0;
  left: 0;
  padding: ${Margin20}px;
  position: absolute;
  right: 0;
  top: 0;
  transform: rotateY(0.5turn) translateZ(1px);
  transition: 1s 0.5s opacity;
`
