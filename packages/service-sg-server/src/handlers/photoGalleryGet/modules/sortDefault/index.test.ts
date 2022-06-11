import { sortDefault } from "./index"

const dataA = {
  takenAt: "2022/01/01",
}
const dataB = {
  takenAt: "2022/01/02",
}
const dataC = {
  takenAt: "2022/02/01",
}

describe("sortDefault", () => {
  it.each([
    [dataA, dataB, 1],
    [dataA, dataC, 1],
    [dataB, dataA, -1],
    [dataC, dataB, -1],
    [dataA, dataA, 0],
  ] as const)("引数が %o, %o の時 %s を返す", (input1, input2, expectedValue) => {
    expect(sortDefault(input1, input2)).toStrictEqual(expectedValue)
  })
})
