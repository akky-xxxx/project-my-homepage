---
to: <%= path %>/index.stories.tsx
---
import { ComponentStoryObj, Meta } from "@storybook/react"
import { <%= componentName %> } from "."

type <%= componentName %>Type = typeof <%= componentName %>


const meta: Meta = {
  component: <%= componentName %>
}
export default meta

export const Default: ComponentStoryObj<<%= componentName %>Type> = {}
