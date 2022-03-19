import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { MonthlyChart } from "."

type MonthlyChartType = typeof MonthlyChart

const Wrapper = (props: ComponentProps<MonthlyChartType>) => (
  <div style={{ height: "300px", width: "100%" }}>
    <MonthlyChart {...props} />
  </div>
)

const meta: Meta<ComponentProps<MonthlyChartType>> = {
  args: {
    galleryInfoList: [
      { date: "2018-10-01" },
      { date: "2018-10-02" },
      { date: "2018-10-03" },
      { date: "2018-10-04" },
      { date: "2018-10-05" },
      { date: "2019-01-01" },
      { date: "2019-02-01" },
      { date: "2019-02-02" },
      { date: "2019-03-01" },
      { date: "2019-03-02" },
      { date: "2019-03-03" },
    ],
    startMonth: 10,
  },
  component: Wrapper,
  parameters: {
    screenshot: {
      delay: 5000,
    },
  },
}
export default meta

export const Default: ComponentStoryObj<MonthlyChartType> = {}
