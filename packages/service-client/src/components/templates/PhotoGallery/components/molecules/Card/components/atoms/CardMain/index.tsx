import styled from "styled-components"
import { MediaQuery } from "../../../../../../../../../shared/const/MediaQuery"

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
    figure {
      transform: none !important;
    }
  }
`
