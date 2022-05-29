import { LinkText } from "."

import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"

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
