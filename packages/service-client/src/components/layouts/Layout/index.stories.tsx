import { ComponentStoryObj, Meta } from "@storybook/react"
import { Template } from "./Template"

type LayoutType = typeof Template

const meta: Meta = {
  args: {
    children: () => <div>子 component</div>,
    route: "/",
  },
  component: Template,
}
export default meta

export const MenuClosed: ComponentStoryObj<LayoutType> = {
  args: {
    isMenuOpen: false,
  },
}

export const MenuOpened: ComponentStoryObj<LayoutType> = {
  args: {
    isMenuOpen: true,
  },
}
