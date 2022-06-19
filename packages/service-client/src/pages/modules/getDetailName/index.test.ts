import { getDetailName } from "./index"

describe("getDetailName", () => {
  describe("detailName を返す", () => {
    it.each([
      [{ locationName: "locationNameValue" }, "locationNameValue"],
      [{ tagName: "tagNameValue" }, "tagNameValue"],
    ] as const)("引数が「%o」の時、「%s」を返す", (input, expectedValue) => {
      expect(getDetailName(input)).toBe(expectedValue)
    })
  })

  describe("detailName を返さない", () => {
    it.each([
      [undefined, ""],
      [[], ""],
      [1, ""],
      [false, ""],
    ] as const)("引数が「%o」の時、「%s」を返す", (input, expectedValue) => {
      expect(getDetailName(input)).toBe(expectedValue)
    })
  })
})
