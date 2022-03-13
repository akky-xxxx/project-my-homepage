import { tooltipFormatter } from "."

describe("PrefChart/tooltipFormatter", () => {
  it.each([
    {
      prefCount: 1,
      prefName: "北海道",
      expectedValue: ["1 枚", "北海道"],
    },
    {
      prefCount: 100_000,
      prefName: "青森県",
      expectedValue: ["100000 枚", "青森県"],
    },
    {
      prefCount: Infinity,
      prefName: "北海道",
      expectedValue: ["Infinity 枚", "北海道"],
    },
    {
      prefCount: NaN,
      prefName: "北海道",
      expectedValue: ["NaN 枚", "北海道"],
    },
  ] as const)(
    "prefCount: $prefCount, payload.prefName: $prefName を渡すと $expectedValue を返す",
    (input) => {
      const { prefCount, prefName, expectedValue } = input
      const props = { payload: { prefCount, prefName, prefId: "01" } } as const
      expect(tooltipFormatter(prefCount, undefined, props)).toEqual(
        expectedValue,
      )
    },
  )
})
