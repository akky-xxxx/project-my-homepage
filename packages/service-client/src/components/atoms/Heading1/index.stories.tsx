import { Heading1 } from "."

import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"

type Heading1Type = typeof Heading1
type Heading1Story = ComponentStoryObj<Heading1Type>

const meta: Meta<ComponentProps<Heading1Type>> = {
  args: {
    children: "heading1",
  },
  component: Heading1,
}
export default meta

export const Default: Heading1Story = {}
