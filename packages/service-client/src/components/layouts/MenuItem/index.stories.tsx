import { ComponentStoryObj, Meta } from "@storybook/react"
import { MenuItem } from "./index"

type MenuItemType = typeof MenuItem

const meta: Meta = {
  args: {
    href: "/",
    linkLabel: "リンクテキスト",
  },
  component: MenuItem,
}
export default meta

export const Default: ComponentStoryObj<MenuItemType> = {}
