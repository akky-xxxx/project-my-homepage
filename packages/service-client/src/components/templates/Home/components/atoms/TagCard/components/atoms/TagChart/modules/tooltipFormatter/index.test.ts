import { tooltipFormatter } from "."

describe("TagChart/tooltipFormatter", () => {
  it.each([
    {
      tagCount: 1,
      tagName: "tagA",
      expectedValue: ["1 枚", "tagA"],
    },
    {
      tagCount: 100_000,
      tagName: "tagB",
      expectedValue: ["100000 枚", "tagB"],
    },
    {
      tagCount: Infinity,
      tagName: "tagC",
      expectedValue: ["Infinity 枚", "tagC"],
    },
    {
      tagCount: NaN,
      tagName: "tagD",
      expectedValue: ["NaN 枚", "tagD"],
    },
  ] as const)(
    "tagCount: $tagCount, payload.tagName: $tagName を渡すと $expectedValue を返す",
    (input) => {
      const { tagCount, tagName, expectedValue } = input
      const props = { payload: { tagCount, tagName, tagId: "01" } } as const
      expect(tooltipFormatter(tagCount, undefined, props)).toEqual(
        expectedValue,
      )
    },
  )
})
