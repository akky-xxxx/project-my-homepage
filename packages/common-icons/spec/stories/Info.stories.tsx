import { Info } from "../../src"

import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"


type InfoType = typeof Info
type InfoStory = ComponentStoryObj<InfoType>

const meta: Meta<ComponentProps<InfoType>> = {
  component: Info,
}
export default meta

export const Default: InfoStory = {}

export const Coloring: InfoStory = {
  args: {
    color: "blue",
  },
}
