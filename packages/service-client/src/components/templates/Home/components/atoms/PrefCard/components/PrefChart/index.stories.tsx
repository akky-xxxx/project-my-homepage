import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { PrefChart } from "."

type PrefChartType = typeof PrefChart

const Wrapper = (props: ComponentProps<PrefChartType>) => (
  <div style={{ height: "300px", width: "300px" }}>
    <PrefChart {...props} />
  </div>
)

const meta: Meta<ComponentProps<PrefChartType>> = {
  args: {
    prefData: [
      {
        prefCount: 1,
        prefId: "01",
        prefName: "北海道",
      },
      {
        prefCount: 2,
        prefId: "02",
        prefName: "青森県",
      },
      {
        prefCount: 3,
        prefId: "03",
        prefName: "岩手県",
      },
      {
        prefCount: 4,
        prefId: "04",
        prefName: "宮城県",
      },
    ],
  },
  component: Wrapper,
  parameters: {
    screenshot: {
      delay: 500,
    },
  },
}
export default meta

export const Default: ComponentStoryObj<PrefChartType> = {}
