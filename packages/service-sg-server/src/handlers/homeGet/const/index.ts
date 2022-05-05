import { stringify } from "qs"
import { Populate } from "../../../shared/const/Populate"

export const Query = stringify({
  ...Populate,
  filters: {
    isShownTop: {
      $eq: true,
    },
  },
})
