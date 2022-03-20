import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { PcMainMenuItems } from "./index"

type PcMainMenuItemsType = typeof PcMainMenuItems
type PcMainMenuItemsStory = ComponentStoryObj<PcMainMenuItemsType>

const meta: Meta<ComponentProps<PcMainMenuItemsType>> = {
  args: {
    menuData: [
      {
        href: "/href",
        linkText: "リンクテキスト1",
      },
      {
        href: "https://www.google.com/",
        linkText: "リンクテキスト2",
      },
    ],
  },
  component: PcMainMenuItems,
}
export default meta

export const Default: PcMainMenuItemsStory = {}
