import { isMoreThan1monthAgo } from "."

describe("isMoreThan1monthAgo", () => {
  const today = new Date("2022-03-06")
  it.each([
    ["2021-12-01", true],
    ["2022-01-01", true],
    ["2022-02-01", true],
    ["2022-02-06", true],
    ["2022-03-01", false],
    ["2022-04-01", false],
  ] as const)(
    "today が 2022-03-06 で %s を渡すと %s を返す",
    (input, expectedValue) => {
      const isMoreThan1monthAgoMain = isMoreThan1monthAgo(today)
      expect(isMoreThan1monthAgoMain(input)).toBe(expectedValue)
    },
  )
})
