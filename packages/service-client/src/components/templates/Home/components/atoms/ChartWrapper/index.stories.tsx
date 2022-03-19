import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { ChartWrapper } from "."

type ChartWrapperType = typeof ChartWrapper

const meta: Meta<ComponentProps<ChartWrapperType>> = {
  args: {
    children: <div>子 component</div>,
    isFitWidth: false,
  },
  component: ChartWrapper,
}
export default meta

export const Default: ComponentStoryObj<ChartWrapperType> = {}
export const IsFit: ComponentStoryObj<ChartWrapperType> = {
  args: {
    isFitWidth: true,
  },
}
