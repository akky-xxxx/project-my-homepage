import styled from "styled-components"
import {
  AppBreakpoints,
  AppMargins,
} from "../../../../../../shared/const/styles"

export const HorizonCardWrapper = styled.div`
  ${AppBreakpoints.PC} {
    display: flex;
    margin-bottom: ${AppMargins.PC.VERTICAL};
    margin-top: ${AppMargins.PC.VERTICAL};
  }

  ${AppBreakpoints.SP} {
    margin-bottom: ${AppMargins.SP.VERTICAL};
    margin-top: ${AppMargins.SP.VERTICAL};
  }
`
