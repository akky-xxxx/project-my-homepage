---
to: <%= path %>/index.stories.tsx
---
import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { <%= componentName %>Template } from "./"

type <%= componentName %>Type = typeof <%= componentName %>Template
type <%= componentName %>Story = ComponentStoryObj<<%= componentName %>Type>

const meta: Meta<ComponentProps<<%= componentName %>Type>> = {
  component: <%= componentName %>Template
}
export default meta

export const Default: <%= componentName %>Story = {}
