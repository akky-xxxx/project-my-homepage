import { getEmptyArray } from "."

describe("getEmptyArray", () => {
  it("引数なしだと length 1の配列を返す", () => {
    expect(getEmptyArray()).toHaveLength(1)
  })

  it("3を渡すと length 3の配列を返す", () => {
    expect(getEmptyArray(3)).toHaveLength(3)
  })

  it("要素は全て undefined", () => {
    const array = getEmptyArray(3)
    expect(array[0]).toBeUndefined()
    expect(array[1]).toBeUndefined()
    expect(array[2]).toBeUndefined()
  })
})
