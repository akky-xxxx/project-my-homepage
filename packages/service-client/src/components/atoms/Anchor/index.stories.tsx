import { Anchor } from "."

import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"

type AnchorType = typeof Anchor
type AnchorStory = ComponentStoryObj<AnchorType>

const meta: Meta<ComponentProps<AnchorType>> = {
  args: {
    children: "リンク要素",
  },
  component: Anchor,
}
export default meta

export const InternalLink: AnchorStory = {
  args: {
    href: "/href",
  },
}

export const ExternalLink: AnchorStory = {
  args: {
    href: "https://www.google.com/",
  },
}
