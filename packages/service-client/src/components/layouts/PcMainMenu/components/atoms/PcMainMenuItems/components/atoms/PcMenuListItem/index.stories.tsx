import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { PcMenuListItem } from "./index"

type PcMenuListItemType = typeof PcMenuListItem
type PcMenuListItemStory = ComponentStoryObj<PcMenuListItemType>

const meta: Meta<ComponentProps<PcMenuListItemType>> = {
  args: {
    children: "PcMenuListItem",
  },
  component: PcMenuListItem,
}
export default meta

export const Default: PcMenuListItemStory = {}
