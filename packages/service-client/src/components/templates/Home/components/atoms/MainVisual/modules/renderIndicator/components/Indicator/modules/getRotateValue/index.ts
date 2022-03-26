import { IndicatorProps } from "../../types"

export const getRotateValue = (props: IndicatorProps) => {
  const { isSelected } = props
  return isSelected ? "45deg" : "0deg"
}
