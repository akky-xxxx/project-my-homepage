import { getPcWidth } from "."

describe("getPcWidth", () => {
  it.each([
    [true, "100%"],
    [false, "300px"],
    [undefined, "300px"],
  ] as const)(
    "isFitWidth が %s の時 % s を返す",
    (isFitWidth, expectedValue) => {
      const props = { isFitWidth } as const
      expect(getPcWidth(props)).toBe(expectedValue)
    },
  )
})
