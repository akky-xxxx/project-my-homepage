---
to: <%= path %>/index.stories.tsx
---
import { ComponentStoryObj, Meta } from "@storybook/react"
import { Template } from "./Template"

type <%= componentName %>Type = typeof Template


const meta: Meta = {
  component: Template
}
export default meta

export const Default: ComponentStoryObj<<%= componentName %>Type> = {}
