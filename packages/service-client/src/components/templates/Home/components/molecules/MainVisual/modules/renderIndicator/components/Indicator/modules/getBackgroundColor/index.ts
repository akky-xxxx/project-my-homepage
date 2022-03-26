import { Colors } from "../../../../../../../../../../../../shared/const/Colors"
import { IndicatorProps } from "../../types"

const { $867445, $ffcadc } = Colors

export const getBackgroundColor = (props: IndicatorProps) => {
  const { isSelected } = props
  return isSelected ? $867445 : $ffcadc
}
