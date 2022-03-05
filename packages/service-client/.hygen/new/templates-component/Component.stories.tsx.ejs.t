---
to: <%= path %>/index.stories.tsx
---
import { ComponentStoryObj, Meta } from "@storybook/react"
import { <%= componentName %>Template } from "./"

type <%= componentName %>Type = typeof <%= componentName %>Template


const meta: Meta = {
  component: <%= componentName %>Template
}
export default meta

export const Default: ComponentStoryObj<<%= componentName %>Type> = {}
