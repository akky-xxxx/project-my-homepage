import { separateDigit } from "./index"

describe("separateDigit", () => {
  describe("区切り位置", () => {
    it.each([
      [0, "0"],
      [1000, "1,000"],
      [1_000_000, "1,000,000"],
      [1_000_000_000, "1,000,000,000"],
    ] as const)("引数が %s の時 %s を返す", (base, expectedValue) => {
      expect(separateDigit(base)).toBe(expectedValue)
    })
  })

  describe("prefix", () => {
    it.each([
      ["", "1,000"],
      ["¥", "¥1,000"],
    ] as const)("prefix が「%s」の時「%s」を返す", (prefix, expectedValue) => {
      expect(separateDigit(1000, { prefix })).toBe(expectedValue)
    })
  })

  describe("suffix", () => {
    it.each([
      ["", "1,000"],
      ["枚", "1,000枚"],
    ] as const)("suffix が「%s」の時「%s」を返す", (suffix, expectedValue) => {
      expect(separateDigit(1000, { suffix })).toBe(expectedValue)
    })
  })
})
