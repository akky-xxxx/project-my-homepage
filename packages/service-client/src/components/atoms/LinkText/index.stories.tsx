import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"

import { LinkText } from "."

type LinkTextType = typeof LinkText
type LinkTextStory = ComponentStoryObj<LinkTextType>

const meta: Meta<ComponentProps<LinkTextType>> = {
  args: {
    children: (() => "リンクテキスト")(),
  },
  component: LinkText,
}
export default meta

export const NotHovered: LinkTextStory = {}

export const Hovered: LinkTextStory = {
  parameters: {
    pseudo: { hover: true },
  },
}
