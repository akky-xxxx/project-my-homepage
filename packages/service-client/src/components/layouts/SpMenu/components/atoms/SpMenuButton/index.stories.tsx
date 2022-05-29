import { SpMenuButton } from "./index"

import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"

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
