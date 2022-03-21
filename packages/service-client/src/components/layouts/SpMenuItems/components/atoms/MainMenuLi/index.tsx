import styled from "styled-components"
import { Margins } from "../../../../../../shared/const/Margins"

const { Margin20 } = Margins

export const MainMenuLi = styled.li`
  & + & {
    margin-top: ${Margin20}px;
  }
`
