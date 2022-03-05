import { ComponentStoryObj, Meta } from "@storybook/react"
import { HomeTemplate } from "."

type HomeType = typeof HomeTemplate

const meta: Meta = {
  component: HomeTemplate,
}
export default meta

export const Default: ComponentStoryObj<HomeType> = {}
