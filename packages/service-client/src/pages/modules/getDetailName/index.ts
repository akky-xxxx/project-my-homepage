import { isObject } from "remeda"

export const getDetailName = (props: unknown) => {
  if (!isObject(props)) return ""
  if (typeof props.locationName === "string") return props.locationName
  if (typeof props.tagName === "string") return props.tagName

  return ""
}
