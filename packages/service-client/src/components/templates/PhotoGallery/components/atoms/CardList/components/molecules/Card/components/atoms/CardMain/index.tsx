import styled from "styled-components"
import { MediaQuery } from "../../../../../../../../../../../../shared/const/MediaQuery"
import { Classes } from "../../../const/Classes"

const { IsShownDetail } = Classes

export const CardMain = styled.div`
  display: inline-block;
  perspective: 600px;
  position: relative;
  width: 100%;

  &:hover {
    figure {
      transform: rotateY(0.5turn);
    }
  }

  /* PC の時のみ hover にすると story.hover で再現しなかったため */
  ${MediaQuery.Tb} {
    &:hover {
      figure {
        transform: none;
      }
    }
  }

  /* stylelint-disable-next-line selector-class-pattern */
  &.${IsShownDetail} {
    /* stylelint-disable-next-line no-descending-specificity */
    figure {
      transform: rotateY(0.5turn);
    }
  }
`
