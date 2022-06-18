import { getRandomImagePath } from "./index"

describe("getRandomImagePath", () => {
  describe('引数が ["a", "b", "c", "d"]', () => {
    it.each([
      [0, "a"],
      [0.1, "a"],
      [0.2, "b"],
      [0.3, "b"],
      [0.4, "b"],
      [0.5, "c"],
      [0.6, "c"],
      [0.7, "c"],
      [0.8, "c"],
      [0.9, "d"],
    ] as const)(
      'random が %s の時は "%s" を返す',
      (spyValue, expectedValue) => {
        const spy = jest.spyOn(Math, "random")
        spy.mockReturnValue(spyValue)
        expect(getRandomImagePath(["a", "b", "c", "d"])).toBe(expectedValue)
        spy.mockReset()
      },
    )
  })

  describe('引数が ["a", "b", "c"]', () => {
    it.each([
      [0, "a"],
      [0.1, "a"],
      [0.2, "a"],
      [0.3, "b"],
      [0.4, "b"],
      [0.5, "b"],
      [0.6, "b"],
      [0.7, "b"],
      [0.8, "c"],
      [0.9, "c"],
    ] as const)(
      'random が %s の時は "%s" を返す',
      (spyValue, expectedValue) => {
        const spy = jest.spyOn(Math, "random")
        spy.mockReturnValue(spyValue)
        expect(getRandomImagePath(["a", "b", "c"])).toBe(expectedValue)
        spy.mockReset()
      },
    )
  })
})
