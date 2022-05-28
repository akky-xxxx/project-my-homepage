import { FC } from "react"
import styled from "styled-components"

import { ClassNames } from "./const/ClassNames"
import { wrapperBase } from "./styles"

type SpMenuBackgroundProps = {
  isOpened: boolean
}

const { IsOpened, BlueLayer, RedLayer, WhiteLayer } = ClassNames

export const SpMenuBackground: FC<SpMenuBackgroundProps> = (props) => {
  const { isOpened } = props

  return (
    <Wrapper className={isOpened ? IsOpened : ""}>
      <div className={BlueLayer} />
      <div className={RedLayer} />
      <div className={WhiteLayer} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${wrapperBase};
`
