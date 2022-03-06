import { format } from "date-fns"
import { getFirstDayOfMonth } from "./modules/getFirstDayOfMonth"
import { isMoreThan1monthAgo } from "./modules/isMoreThan1monthAgo"
import { isSameMonth } from "./modules/isSameMonth"

type MonthlyData = {
  date: string
  count: number
}

type GetMonthlyDataArguments = {
  galleryInfoList: readonly { date: string }[]
  startMonth: number
  today: Date
}
type GetMonthlyData = (arguments_: GetMonthlyDataArguments) => MonthlyData[]

export const getMonthlyData: GetMonthlyData = (getMonthlyDataArguments) => {
  const { galleryInfoList, startMonth, today } = getMonthlyDataArguments
  const getFirstDayOfMonthMain = getFirstDayOfMonth(today)
  const isMoreThan1monthAgoMain = isMoreThan1monthAgo(today)

  return [...new Array<unknown>(startMonth)]
    .map(getFirstDayOfMonthMain)
    .filter(isMoreThan1monthAgoMain)
    .reverse() // 表示用に配列を逆転
    .map((month) => {
      const isSameMonthMain = isSameMonth(month)
      return {
        count: galleryInfoList.filter(isSameMonthMain).length,
        date: format(new Date(month), "yyyy/M"),
      }
    }) // 表示用の形式に変更
}
