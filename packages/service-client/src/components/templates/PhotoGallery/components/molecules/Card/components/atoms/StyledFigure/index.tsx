import styled from "styled-components"
import { Margins } from "../../../../../../../../../shared/const/Margins"
import { MediaQuery } from "../../../../../../../../../shared/const/MediaQuery"

const { Margin20, Margin8 } = Margins
const Half = 2
const Minus = -1

export const StyledFigure = styled.figure`
  position: relative;
  transform-style: preserve-3d;
  transition: 1s transform;

  ${MediaQuery.Pc} {
    padding: ${Margin20}px;
  }

  ${MediaQuery.Tb} {
    padding: ${Margin8}px;
  }

  &::after {
    /* 非対応でも無視 */
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    background-image: radial-gradient(
      ellipse closest-side,
      rgba(0, 0, 0, 10%) 0%,
      rgba(0, 0, 0, 0%) 100%
    );
    content: "";
    display: block;
    height: 10px;
    position: absolute;
    transform: rotateX(90deg);
    width: 100%;

    ${MediaQuery.Pc} {
      bottom: ${(Margin20 / Half) * Minus}px;
    }

    ${MediaQuery.Tb} {
      bottom: ${(Margin8 / Half) * Minus}px;
    }
  }
`
