import { tooltipFormatter } from "."

describe("MonthlyChart/tooltipFormatter", () => {
  it.each([
    ["10", "10 枚"],
    ["0", "0 枚"],
    ["NaN", "NaN 枚"],
    ["Infinity", "Infinity 枚"],
  ] as const)('%s を投げたら [%s, "枚数"] を返す', (input, expectedValue) => {
    expect(tooltipFormatter(input)).toEqual([expectedValue, "枚数"])
  })
})
