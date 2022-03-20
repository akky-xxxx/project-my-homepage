import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { AnchorBack } from "./index"

type AnchorBackType = typeof AnchorBack
type AnchorBackStory = ComponentStoryObj<AnchorBackType>

const meta: Meta<ComponentProps<AnchorBackType>> = {
  args: {
    children: "リンクの透過じの背景用",
  },
  component: AnchorBack,
}
export default meta

export const Default: AnchorBackStory = {}
