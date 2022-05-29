import type { MarkerProps } from "../../types"

type GetTransform = (getTransformArguments: MarkerProps) => string
export const getTransform: GetTransform = (getTransformArguments) => {
  const { markerPosition, menuLength } = getTransformArguments
  return `translate(calc(100% / ${menuLength} * ${
    markerPosition * menuLength
  }), 0)`
}
