// eslint-disable-next-line no-magic-numbers
export const getEmptyArray = (arrayNumber = 1) => [
  ...new Array<undefined>(arrayNumber),
]
