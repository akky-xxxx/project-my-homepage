import { createTheme } from "@mui/material"
import { VFC } from "react"
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { getMonthlyData } from "./modules/getMonthlyData"
import { tooltipFormatter } from "./modules/tooltipFormatter"

const {
  palette: {
    primary: { main: mainColor },
  },
} = createTheme()

type MonthlyChartProps = {
  readonly galleryInfoList: { date: string }[]
  startMonth: number
}

export const MonthlyChart: VFC<MonthlyChartProps> = (props) => {
  const { startMonth, galleryInfoList } = props
  const getMonthlyDataArguments = {
    galleryInfoList,
    startMonth,
    today: new Date("2019-06-01"), // TODO: 環境変数で管理することを検討
  } as const

  return (
    <ResponsiveContainer id="LineChart">
      <LineChart data={getMonthlyData(getMonthlyDataArguments)}>
        <CartesianGrid />
        <Tooltip formatter={tooltipFormatter} />
        <XAxis dataKey="date" />
        <YAxis type="number" />
        <Line dataKey="count" fill={mainColor} stroke={mainColor} />
      </LineChart>
    </ResponsiveContainer>
  )
}
