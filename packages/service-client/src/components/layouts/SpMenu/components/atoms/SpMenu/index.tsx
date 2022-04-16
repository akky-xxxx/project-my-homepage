import styled, { keyframes } from "styled-components"
import { ZIndexes } from "../../../const/ZIndexes"

// TODO: stylelint が css in js 構文を正しく解析できるようになったら解除
/* stylelint-disable keyframes-name-pattern */
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

const getPointerEvents = (props: MenuProps) => {
  const { isOpened } = props
  return isOpened ? "inherit" : "none"
}

export const SpMenu = styled.div<MenuProps>`
  animation: ${getKeyframes} 0.5s;
  pointer-events: ${getPointerEvents};
  position: fixed;
  z-index: ${ZIndexes.Menu};
`
