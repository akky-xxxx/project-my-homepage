import { VFC } from "react"
import styled from "styled-components"
import { ClassNames } from "./const/ClassNames"
import { circleBase } from "./styles"

const { IsOpened, BarTop, BarMiddle, BarBottom } = ClassNames

type SpMenuButtonProps = {
  handleClickButton: () => void
  isOpened: boolean
}

export const SpMenuButton: VFC<SpMenuButtonProps> = (props) => {
  const { isOpened, handleClickButton } = props
  return (
    <Circle className={isOpened ? IsOpened : ""} onClick={handleClickButton}>
      <span className={BarTop} />
      <span className={BarMiddle} />
      <span className={BarBottom} />
    </Circle>
  )
}

const Circle = styled.button`
  ${circleBase}
`
