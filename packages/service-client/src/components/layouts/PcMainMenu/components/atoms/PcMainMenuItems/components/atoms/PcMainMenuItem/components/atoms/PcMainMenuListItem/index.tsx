import styled from "styled-components"

export const PcMainMenuListItem = styled.li`
  flex: 1 0 calc(100% / 3);
  position: relative;

  & > ul {
    top: -100px;
  }

  &:hover ul {
    top: 50px;
  }
`
