import { getMonthlyData } from "."

describe("getMonthlyData", () => {
  const input = [
    { date: "2021-10-01" },
    { date: "2021-10-02" },
    { date: "2021-10-03" },
    { date: "2021-10-04" },
    { date: "2021-10-05" },
    { date: "2022-01-01" },
    { date: "2022-02-01" },
    { date: "2022-02-02" },
    { date: "2022-03-01" },
    { date: "2022-03-02" },
    { date: "2022-03-03" },
  ] as const
  const expected1 = [] as const
  const expected2 = [{ date: "2022/2", count: 2 }] as const
  const expected3 = [
    { date: "2022/1", count: 1 },
    { date: "2022/2", count: 2 },
  ] as const
  const expected4 = [
    { date: "2021/9", count: 0 },
    { date: "2021/10", count: 5 },
    { date: "2021/11", count: 0 },
    { date: "2021/12", count: 0 },
    { date: "2022/1", count: 1 },
    { date: "2022/2", count: 2 },
  ] as const

  it.each([
    [1, input, expected1],
    [2, input, expected2],
    [3, input, expected3],
    [7, input, expected4],
  ] as const)(
    "startMonth が %s galleryInfoList が %o の時 %o を返す",
    (startMonth, galleryInfoList, expectedValue) => {
      const getMonthlyDataArguments = {
        galleryInfoList,
        startMonth,
        today: new Date("2022-03-05"),
      } as const
      expect(getMonthlyData(getMonthlyDataArguments)).toEqual(expectedValue)
    },
  )
})
