import { TagData } from "../../types"

type TooltipFormatter = (
  value: number | string,
  _: unknown,
  props: { payload: TagData },
) => [string, string]
export const tooltipFormatter: TooltipFormatter = (value, _, props) => {
  const {
    payload: { tagName },
  } = props
  return [`${value} 枚`, tagName]
}
