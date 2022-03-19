import { getFirstDayOfMonth } from "."

describe("getFirstDayOfMonth", () => {
  it.each([
    [new Date("2022-01-01"), 0, "2022-01-01"],
    [new Date("2022-02-28"), 1, "2022-01-01"],
    [new Date("2022-12-31"), 2, "2022-10-01"],
  ] as const)(
    "today に %s, index に %s を渡すと %s を返す",
    (input, index, expectedValue) => {
      expect(getFirstDayOfMonth(input)(null, index)).toBe(expectedValue)
    },
  )
})
