import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { PcAnchor } from "./index"

type PcAnchorType = typeof PcAnchor
type PcAnchorStory = ComponentStoryObj<PcAnchorType>

const meta: Meta<ComponentProps<PcAnchorType>> = {
  args: {
    children: "リンクテキスト",
  },
  component: PcAnchor,
}
export default meta

export const Default: PcAnchorStory = {}
