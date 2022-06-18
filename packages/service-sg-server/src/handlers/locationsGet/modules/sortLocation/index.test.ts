import { sortLocation } from "./index"

describe("sortLocation", () => {
  it.each([
    {
      firstArgument: { order: 1 },
      secondArgument: { order: 2 },
      expectedValue: -1,
    },
    {
      firstArgument: { order: 2 },
      secondArgument: { order: 1 },
      expectedValue: 1,
    },
    {
      firstArgument: { order: 1 },
      secondArgument: { order: 1 },
      expectedValue: 0,
    },
  ] as const)(
    "引数に $firstArgument, $secondArgument を取る時、 $expectedValue を返す",
    (values) => {
      const { firstArgument, secondArgument, expectedValue } = values
      expect(sortLocation(firstArgument, secondArgument)).toBe(expectedValue)
    },
  )
})
