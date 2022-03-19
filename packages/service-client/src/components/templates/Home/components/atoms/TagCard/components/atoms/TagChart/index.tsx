import { createTheme } from "@mui/material"
import { VFC } from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { tooltipFormatter } from "./modules/tooltipFormatter"
import { TagData } from "./types"

type TagChartProps = {
  tagData: TagData[]
}

const {
  palette: {
    primary: { main: mainColor },
  },
} = createTheme()

export const TagChart: VFC<TagChartProps> = (props) => {
  const { tagData } = props

  return (
    <ResponsiveContainer id="TagChart">
      <BarChart data={tagData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="tagName" />
        <YAxis />
        <Tooltip formatter={tooltipFormatter} />
        <Bar dataKey="tagCount" fill={mainColor} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default TagChart
