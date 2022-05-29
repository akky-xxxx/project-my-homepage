import { WhiteBackground } from "./index"

import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"

type WhiteBackgroundType = typeof WhiteBackground
type WhiteBackgroundStory = ComponentStoryObj<WhiteBackgroundType>

const meta: Meta<ComponentProps<WhiteBackgroundType>> = {
  args: {
    children: "白背景用",
  },
  component: WhiteBackground,
}
export default meta

export const Default: WhiteBackgroundStory = {}
