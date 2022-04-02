import styled from "styled-components"
import { Margins } from "../../../../../../../../../shared/const/Margins"
import { MediaQuery } from "../../../../../../../../../shared/const/MediaQuery"

const { Margin12, Margin20 } = Margins

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;

  ${MediaQuery.Pc} {
    padding: ${Margin20}px;
  }

  ${MediaQuery.Tb} {
    padding: ${Margin12}px;
  }
`
