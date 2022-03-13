import { VFC } from "react"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { Colors } from "../../../../../../../../shared/const/styles"
import { tooltipFormatter } from "./modules/tooltipFormatter"
import { PrefData } from "./types"

type PrefChartProps = {
  prefData: PrefData[]
}

export const PrefChart: VFC<PrefChartProps> = (props) => {
  const { prefData } = props

  return (
    <ResponsiveContainer id="PrefChart">
      <PieChart>
        <Pie data={prefData} labelLine label fill="#8884d8" dataKey="prefCount">
          {prefData.map((entry, index) => {
            const colorIndex = index % Colors.length
            return <Cell key={entry.prefId} fill={Colors[colorIndex]} />
          })}
        </Pie>
        <Tooltip formatter={tooltipFormatter} />
      </PieChart>
    </ResponsiveContainer>
  )
}
