import styled from "styled-components"

import { Colors } from "../../../shared/const/Colors"
import { FontSizes } from "../../../shared/const/FontSizes"
import { FontWeights } from "../../../shared/const/FontWeights"
import { Margins } from "../../../shared/const/Margins"

const { $f0284f, $003989 } = Colors

export const Heading1 = styled.h1`
  border-bottom: 1px solid ${$f0284f};
  color: ${$003989};
  font-size: ${FontSizes.px24};
  font-weight: ${FontWeights.Bold};
  margin-bottom: ${Margins.Margin20}px;
  padding-bottom: ${Margins.Margin4}px;
`
