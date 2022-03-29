import { Close } from "common-icons"
import { VFC } from "react"
import styled from "styled-components"
import { Colors } from "../../../../../../../../../shared/const/Colors"
import { Margins } from "../../../../../../../../../shared/const/Margins"

const { $ffffff, $a81c4d } = Colors
const { Margin16 } = Margins

type CloseIconProps = {
  onClickIcon: () => void
}

export const CloseIcon: VFC<CloseIconProps> = (props) => {
  const { onClickIcon } = props

  return (
    <IconWrapper onClick={onClickIcon} className="is-only-tb">
      <Close color={$a81c4d} />
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
