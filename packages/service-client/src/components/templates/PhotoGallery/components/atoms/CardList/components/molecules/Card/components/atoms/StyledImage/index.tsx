import styled from "styled-components"
import { MediaQuery } from "../../../../../../../../../../../../shared/const/MediaQuery"

export const StyledImage = styled.img`
  height: auto;
  width: auto;

  ${MediaQuery.Pc} {
    max-height: 50vh;
  }
`
