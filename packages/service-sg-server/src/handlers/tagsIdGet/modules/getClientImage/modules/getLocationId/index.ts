import { nanoid } from "nanoid"

type GetLocationId = (location?: { id: number }) => string

export const getLocationId: GetLocationId = (location) =>
  location ? String(location.id) : `unknown-${nanoid()}`
