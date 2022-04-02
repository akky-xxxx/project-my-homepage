import { Info } from "common-icons"
import { VFC } from "react"
import styled from "styled-components"
import { Colors } from "../../../../../../../../../../../../shared/const/Colors"
import { Margins } from "../../../../../../../../../../../../shared/const/Margins"

const { $ffffff, $003989 } = Colors
const { Margin16 } = Margins

type InfoIconProps = {
  onClickIcon: () => void
}

export const InfoIcon: VFC<InfoIconProps> = (props) => {
  const { onClickIcon } = props

  return (
    <IconWrapper onClick={onClickIcon} className="is-only-tb">
      <Info color={$003989} />
    </IconWrapper>
  )
}

const IconWrapper = styled.button`
  background-color: ${$ffffff};
  border: none;
  border-radius: 50%;
  height: 40px;
  padding: 2px;
  position: absolute;
  right: ${Margin16}px;
  top: ${Margin16}px;
  width: 40px;
  z-index: 10;
`
