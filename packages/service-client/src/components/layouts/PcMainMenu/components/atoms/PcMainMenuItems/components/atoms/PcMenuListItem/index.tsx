import styled from "styled-components"

export const PcMenuListItem = styled.li`
  flex-grow: 1;
  position: relative;

  & > ul {
    top: -100px;
  }

  &:hover ul {
    top: 50px;
  }
`
