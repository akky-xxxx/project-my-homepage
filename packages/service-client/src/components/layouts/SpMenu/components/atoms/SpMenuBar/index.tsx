import styled from "styled-components"
import { Colors } from "../../../../../../shared/const/Colors"
import { Margins } from "../../../../../../shared/const/Margins"
import { ZIndexes } from "../../../const/ZIndexes"

const { $ffffff, $bf9963 } = Colors
const { Margin12 } = Margins

export const SpMenuBar = styled.header`
  background-color: ${$ffffff};
  border-bottom: 1px solid ${$bf9963};
  display: flex;
  justify-content: flex-end;
  left: 0;
  padding: ${Margin12}px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${ZIndexes.Button};
`
