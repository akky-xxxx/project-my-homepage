import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { Indicator } from "./index"

type IndicatorType = typeof Indicator
type IndicatorStory = ComponentStoryObj<IndicatorType>

const meta: Meta<ComponentProps<IndicatorType>> = {
  component: Indicator,
}
export default meta

export const NotSelected: IndicatorStory = {
  args: {
    isSelected: false,
  },
}

export const Selected: IndicatorStory = {
  args: {
    isSelected: true,
  },
}
