import { stringify } from "qs"
import { Populate } from "../../../const/Populate"

export const Query = stringify({
  ...Populate,
})
