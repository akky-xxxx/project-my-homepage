import { ComponentStoryObj, Meta } from "@storybook/react"
import { Tag } from "./index"

type TagType = typeof Tag

const meta: Meta = {
  component: Tag,
}
export default meta

export const Primary: ComponentStoryObj<TagType> = {
  args: {
    tagName: "プライマリタグ",
  },
}

export const Secondary: ComponentStoryObj<TagType> = {
  args: {
    isSelected: false,
    tagName: "セカンダリタグ",
  },
}
