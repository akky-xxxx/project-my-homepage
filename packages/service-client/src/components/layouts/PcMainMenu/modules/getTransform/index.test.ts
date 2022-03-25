import { getTransform } from "."

describe("getTransform", () => {
  it.each([
    [2, 0, "translate(calc(100% / 2 * 0), 0)"],
    [2, 1, "translate(calc(100% / 2 * 2), 0)"],
    [4, 2, "translate(calc(100% / 4 * 8), 0)"],
  ] as const)(
    "メニュー数が %s, position が %s の時、「%s」を返す",
    (menuLength, markerPosition, expectedValue) => {
      const props = { menuLength, markerPosition }
      expect(getTransform(props)).toBe(expectedValue)
    },
  )
})
