import styled from "styled-components"
import { Colors } from "../../../shared/const/Colors"

const { $003989 } = Colors

export const LinkText = styled.span`
  border-bottom: 1px solid ${$003989};
  color: ${$003989};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }
`
