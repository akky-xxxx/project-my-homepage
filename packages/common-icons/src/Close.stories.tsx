import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { Close } from "./index"

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
