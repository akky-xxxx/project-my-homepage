import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { PcSubMenuItem } from "./index"

type PcSubMenuItemType = typeof PcSubMenuItem
type PcSubMenuItemStory = ComponentStoryObj<PcSubMenuItemType>

const meta: Meta<ComponentProps<PcSubMenuItemType>> = {
  args: {
    linkText: "リンクテキスト",
  },
  component: PcSubMenuItem,
}
export default meta

export const Internal: PcSubMenuItemStory = {
  args: {
    href: "/href",
  },
}

export const External: PcSubMenuItemStory = {
  args: {
    href: "https://www.google.com/",
  },
}
