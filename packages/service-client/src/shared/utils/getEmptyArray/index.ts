export const getEmptyArray = (arrayNumber = 1) => [
  ...new Array<undefined>(arrayNumber),
]
