import { PrefData } from "../../types"

type TooltipFormatter = (
  value: number | string,
  _: unknown,
  props: { payload: PrefData },
) => [string, string]

export const tooltipFormatter: TooltipFormatter = (value, _, props) => {
  const {
    payload: { prefName },
  } = props
  return [`${value} 枚`, prefName]
}
