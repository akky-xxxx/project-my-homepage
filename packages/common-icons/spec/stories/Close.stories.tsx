import { Close } from "../../src"

import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"

type CloseType = typeof Close
type CloseStory = ComponentStoryObj<CloseType>

const meta: Meta<ComponentProps<CloseType>> = {
  component: Close,
}
export default meta

export const Default: CloseStory = {}

export const Coloring: CloseStory = {
  args: {
    color: "blue",
  },
}
