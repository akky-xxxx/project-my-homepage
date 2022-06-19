import styled from "styled-components"

import { Colors } from "../../../shared/const/Colors"
import { FontSizes } from "../../../shared/const/FontSizes"
import { FontWeights } from "../../../shared/const/FontWeights"
import { Margins } from "../../../shared/const/Margins"

const { $333333, $003989 } = Colors

export const Heading2 = styled.h2`
  border-left: 5px solid ${$333333};
  color: ${$003989};
  font-size: ${FontSizes.px20};
  font-weight: ${FontWeights.Bold};
  margin-bottom: ${Margins.Margin16}px;
  padding-left: 5px;
`
