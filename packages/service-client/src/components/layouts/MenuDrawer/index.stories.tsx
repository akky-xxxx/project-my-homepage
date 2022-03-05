import { ComponentStoryObj, Meta } from "@storybook/react"
import { MenuDrawer } from "./index"

type MenuDrawerType = typeof MenuDrawer

const meta: Meta = {
  component: MenuDrawer,
}
export default meta

export const Close: ComponentStoryObj<MenuDrawerType> = {
  args: {
    isMenuOpen: false,
  },
}

export const Open: ComponentStoryObj<MenuDrawerType> = {
  args: {
    isMenuOpen: true,
  },
}
