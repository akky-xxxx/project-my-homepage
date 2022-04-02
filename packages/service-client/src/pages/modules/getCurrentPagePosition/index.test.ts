import { getCurrentPagePosition } from "./index"

describe("getCurrentPagePosition", () => {
  it.each([
    ["/", 0],
    ["/photo-gallery", 1],
    ["/photo-gallery/tags", 1],
    ["/_error", -1],
  ] as const)("引数が %s の時、 %s を返す", (input, output) => {
    expect(getCurrentPagePosition(input)).toBe(output)
  })
})
