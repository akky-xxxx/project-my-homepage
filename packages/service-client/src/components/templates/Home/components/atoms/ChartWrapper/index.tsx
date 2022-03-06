import styled from "styled-components"
import { AppBreakpoints } from "../../../../../../shared/const/styles"
import { PieSize } from "./const"
import { getPcWidth } from "./modules/getPcWidth"
import { ChartWrapperProps } from "./types"

export const ChartWrapper = styled.div<ChartWrapperProps>`
  ${AppBreakpoints.PC} {
    height: ${PieSize.PC}px;
    width: ${getPcWidth};
  }

  ${AppBreakpoints.SP} {
    height: ${PieSize.SP}px;
    width: 100%;
  }
`
