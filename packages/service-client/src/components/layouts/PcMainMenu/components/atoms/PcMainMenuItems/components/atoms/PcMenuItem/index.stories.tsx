import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { PcMenuItem } from "./index"

type PcMenuItemType = typeof PcMenuItem
type PcMenuItemStory = ComponentStoryObj<PcMenuItemType>

const meta: Meta<ComponentProps<PcMenuItemType>> = {
  args: {
    linkText: "リンクテキスト",
  },
  component: PcMenuItem,
}
export default meta

export const Internal: PcMenuItemStory = {
  args: {
    href: "/href",
  },
}

export const External: PcMenuItemStory = {
  args: {
    href: "https://www.google.com/",
  },
}
