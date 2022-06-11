import { getPageName } from "./index"

describe("getPageName", () => {
  it.each([
    ["/", "Home"],
    ["/photo-gallery", "Photo Gallery"],
    ["/unknown", "Unknown"],
  ] as const)("引数が %s の時 %s を返す", (argument, expectedValue) => {
    expect(getPageName(argument)).toBe(expectedValue)
  })
})
