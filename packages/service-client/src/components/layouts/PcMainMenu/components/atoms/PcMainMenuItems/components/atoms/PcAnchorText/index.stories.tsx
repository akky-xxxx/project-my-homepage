import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { PcAnchorText } from "./index"

type PcAnchorType = typeof PcAnchorText
type PcAnchorStory = ComponentStoryObj<PcAnchorType>

const meta: Meta<ComponentProps<PcAnchorType>> = {
  args: {
    children: "リンクテキスト",
  },
  component: PcAnchorText,
}
export default meta

export const Default: PcAnchorStory = {}
