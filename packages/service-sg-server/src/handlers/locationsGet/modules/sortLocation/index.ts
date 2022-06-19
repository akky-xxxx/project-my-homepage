import type { LocationsGETRes } from "../../../../libs/bffApiClient"

type Location = Pick<LocationsGETRes["images"][number], "order">
type SortLocation = (a: Location, b: Location) => number

const BeforePosition = 1
const AfterPosition = -1
const StayPosition = 0

export const sortLocation: SortLocation = (a, b) => {
  const { order: aOrder } = a
  const { order: bOrder } = b

  if (aOrder > bOrder) return BeforePosition
  if (aOrder < bOrder) return AfterPosition
  return StayPosition
}
