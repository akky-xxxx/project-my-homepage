import { isSameMonth } from "."

describe("isSameMonth", () => {
  const isSameMonthMain = isSameMonth("2022-03-05")
  it.each([
    [{ date: "2022-01-01" }, false],
    [{ date: "2022-02-02" }, false],
    [{ date: "2022-03-03" }, true],
  ] as const)(
    "month が 2022-03-05 で %s を渡すと %s を返す",
    (input, expectedValue) => {
      expect(isSameMonthMain(input)).toBe(expectedValue)
    },
  )
})
