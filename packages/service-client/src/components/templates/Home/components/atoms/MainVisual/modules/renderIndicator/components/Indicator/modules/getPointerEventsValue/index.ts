import type { IndicatorProps } from "../../types"

export const getPointerEventsValue = (props: IndicatorProps) => {
  const { isSelected } = props
  return isSelected ? "none" : "inherit"
}
