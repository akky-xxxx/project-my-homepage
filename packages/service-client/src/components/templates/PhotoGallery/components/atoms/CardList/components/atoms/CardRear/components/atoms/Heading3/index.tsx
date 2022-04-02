import styled from "styled-components"
import { FontSizes } from "../../../../../../../../../../../../shared/const/FontSizes"
import { FontWeights } from "../../../../../../../../../../../../shared/const/FontWeights"
import { Margins } from "../../../../../../../../../../../../shared/const/Margins"
import { MediaQuery } from "../../../../../../../../../../../../shared/const/MediaQuery"

const { px20 } = FontSizes
const { Margin12 } = Margins

export const Heading3 = styled.h3`
  font-size: ${px20};
  font-weight: ${FontWeights.Bold};

  ${MediaQuery.Tb} {
    margin-top: ${Margin12}px;
  }
`
