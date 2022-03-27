import { Colors } from "../../../../../../../../../../../../shared/const/Colors"
import { IndicatorProps } from "../../types"

const { $333333, $ffffff } = Colors

export const getBackgroundColor = (props: IndicatorProps) => {
  const { isSelected } = props
  return isSelected ? $333333 : $ffffff
}
