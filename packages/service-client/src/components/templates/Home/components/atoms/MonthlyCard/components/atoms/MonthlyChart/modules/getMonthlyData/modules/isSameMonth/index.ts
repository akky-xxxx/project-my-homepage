import { format } from "date-fns"

type IsSameMonth = (month: string) => (galleryInfo: { date: string }) => boolean
const Format = "yyyy-MM-01"
export const isSameMonth: IsSameMonth = (month) => (galleryInfo) =>
  format(new Date(galleryInfo.date), Format) === format(new Date(month), Format)
