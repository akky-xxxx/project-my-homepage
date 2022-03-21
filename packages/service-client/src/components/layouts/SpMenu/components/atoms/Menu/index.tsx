import styled, { keyframes } from "styled-components"
import { ZIndexes } from "../../../const/ZIndexes"

const inKeyframes = keyframes`
  from {
    display: none;
  }

  to {
    display: block;
  }
`

const outKeyframes = keyframes`
  from {
    display: block;
  }

  to {
    display: none;
  }
`

type MenuProps = {
  isOpened: boolean
}

const getKeyframes = (props: MenuProps) => {
  const { isOpened } = props
  return isOpened ? inKeyframes : outKeyframes
}

export const Menu = styled.div<MenuProps>`
  animation: ${getKeyframes} 0.5s;
  position: fixed;
  z-index: ${ZIndexes.Menu};
`
