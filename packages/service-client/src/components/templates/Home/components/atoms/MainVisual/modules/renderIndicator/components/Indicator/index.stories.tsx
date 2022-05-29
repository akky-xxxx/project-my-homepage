import { Indicator } from "./index"

import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"

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
