import { differenceInMonths } from "date-fns"

type IsMoreThan1monthAgo = (today: Date) => (date: string) => boolean

const LastMonth = 1
export const isMoreThan1monthAgo: IsMoreThan1monthAgo = (today) => (date) =>
  differenceInMonths(today, new Date(date)) >= LastMonth
