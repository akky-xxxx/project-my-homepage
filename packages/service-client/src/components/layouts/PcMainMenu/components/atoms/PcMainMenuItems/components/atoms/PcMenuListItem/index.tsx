import styled from "styled-components"

export const PcMenuListItem = styled.li`
  flex-grow: 1;
  position: relative;

  & > ul {
    display: none;
  }

  &:hover ul {
    display: block;
  }
`
