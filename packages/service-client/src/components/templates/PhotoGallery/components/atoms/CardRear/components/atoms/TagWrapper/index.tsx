import styled from "styled-components"
import { MediaQuery } from "../../../../../../../../../shared/const/MediaQuery"

export const TagWrapper = styled.li`
  ${MediaQuery.Pc} {
    margin: 2px 4px;
  }

  ${MediaQuery.Tb} {
    margin: 4px;
  }
`
