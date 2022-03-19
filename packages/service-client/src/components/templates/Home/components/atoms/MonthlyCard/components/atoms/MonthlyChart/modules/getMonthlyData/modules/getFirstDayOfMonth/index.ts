import { format, subMonths } from "date-fns"

type GetFirstDayOfMonth = (today: Date) => <T>(_: T, index: number) => string

export const getFirstDayOfMonth: GetFirstDayOfMonth = (today) => (_, index) =>
  format(subMonths(new Date(today), index), "yyyy-MM-01")
