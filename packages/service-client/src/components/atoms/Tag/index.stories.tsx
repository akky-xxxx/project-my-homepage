import { Tag } from "."

import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"

type TagType = typeof Tag
type TagStory = ComponentStoryObj<TagType>

const meta: Meta<ComponentProps<TagType>> = {
  args: {
    children: (() => "タグテキスト")(),
  },
  component: Tag,
}
export default meta

export const NotHovered: TagStory = {}

export const Hovered: TagStory = {
  parameters: {
    pseudo: { hover: true },
  },
}
