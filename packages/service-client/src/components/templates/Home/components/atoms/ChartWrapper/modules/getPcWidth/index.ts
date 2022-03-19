import { PieSize } from "../../const"
import { ChartWrapperProps } from "../../types"

type GetPcWidth = (props: ChartWrapperProps) => string

export const getPcWidth: GetPcWidth = (props) =>
  props.isFitWidth ? "100%" : `${PieSize.PC}px`
