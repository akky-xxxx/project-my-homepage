import { SpMenuBackground } from "./index"

import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"

type SpMenuBackgroundType = typeof SpMenuBackground
type SpMenuBackgroundStory = ComponentStoryObj<SpMenuBackgroundType>

const meta: Meta<ComponentProps<SpMenuBackgroundType>> = {
  component: SpMenuBackground,
}
export default meta

export const Opened: SpMenuBackgroundStory = {
  args: {
    isOpened: true,
  },
}

export const Closed: SpMenuBackgroundStory = {
  args: {
    isOpened: false,
  },
}
