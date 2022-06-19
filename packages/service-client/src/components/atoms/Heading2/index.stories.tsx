import { Heading2 } from "."

import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"

type Heading2Type = typeof Heading2
type Heading2Story = ComponentStoryObj<Heading2Type>

const meta: Meta<ComponentProps<Heading2Type>> = {
  args: {
    children: "heading2",
  },
  component: Heading2,
}
export default meta

export const Default: Heading2Story = {}
