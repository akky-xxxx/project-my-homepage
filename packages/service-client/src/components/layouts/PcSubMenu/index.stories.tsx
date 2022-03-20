import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { PcSubMenu } from "."

type PcSubMenuType = typeof PcSubMenu
type PcSubMenuStory = ComponentStoryObj<PcSubMenuType>

const meta: Meta<ComponentProps<PcSubMenuType>> = {
  args: {
    subMenu: [
      {
        linkText: "リンクテキスト",
        href: "/href",
      },
    ],
  },
  component: PcSubMenu,
}
export default meta

export const Default: PcSubMenuStory = {}
