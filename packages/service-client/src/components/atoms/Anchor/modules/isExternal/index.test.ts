import { isExternal } from "./index"

describe("isExternal", () => {
  it.each([
    ["http://", true],
    ["https://", true],
    ["/href", false],
    ["href", false],
  ] as const)("引数が %s の時 %s を返す", (input, expectedValue) => {
    expect(isExternal(input)).toBe(expectedValue)
  })
})
