import styled from "styled-components"
import { MediaQuery } from "../../../../../../../../../../../../shared/const/MediaQuery"

export const Above = styled.div`
  ${MediaQuery.Pc} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`
