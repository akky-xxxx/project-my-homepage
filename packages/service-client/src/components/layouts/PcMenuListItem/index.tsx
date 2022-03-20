import styled from "styled-components"
import { Colors } from "../../../shared/const/Colors"

const { $ffffff } = Colors

export const PcMenuListItem = styled.li`
  background-color: ${$ffffff};
  flex-grow: 1;
  position: relative;

  & > ul {
    display: none;
  }

  &:hover ul {
    display: block;
  }
`
