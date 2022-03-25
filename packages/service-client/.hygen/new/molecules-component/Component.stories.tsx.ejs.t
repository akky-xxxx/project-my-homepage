---
to: <%= path %>/index.stories.tsx
---
import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { Template } from "./Template"

type <%= componentName %>Type = typeof Template
type <%= componentName %>Story = ComponentStoryObj<<%= componentName %>Type>

const meta: Meta<ComponentProps<<%= componentName %>Type>> = {
  component: Template,
}
export default meta

export const Default: <%= componentName %>Story = {}
