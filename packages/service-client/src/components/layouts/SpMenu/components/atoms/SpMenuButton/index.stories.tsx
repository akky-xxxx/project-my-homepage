import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"

import { SpMenuButton } from "./index"

type SpMenuButtonType = typeof SpMenuButton
type SpMenuButtonStory = ComponentStoryObj<SpMenuButtonType>

const meta: Meta<ComponentProps<SpMenuButtonType>> = {
  component: SpMenuButton,
}
export default meta

export const Opened: SpMenuButtonStory = {
  args: {
    isOpened: true,
  },
}
export const Closed: SpMenuButtonStory = {
  args: {
    isOpened: false,
  },
}
