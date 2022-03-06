import { ComponentStoryObj, Meta } from "@storybook/react"
import { HeaderBar } from "."

type HeaderBarType = typeof HeaderBar

const meta: Meta<HeaderBarType> = {
  component: HeaderBar,
}
export default meta

export const Default: ComponentStoryObj<HeaderBarType> = {}
