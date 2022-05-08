import { stringify } from "qs"
import { Populate } from "../../Populate"

export const Query = stringify({
  ...Populate,
  filters: {
    isShownTop: {
      $eq: true,
    },
  },
})
