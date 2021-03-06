---
to: <%= path %>/<%= componentName %>.stories.tsx
---
import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { <%= componentName %> } from "./index"

type <%= componentName %>Type = typeof <%= componentName %>
type <%= componentName %>Story = ComponentStoryObj<<%= componentName %>Type>

const meta: Meta<ComponentProps<<%= componentName %>Type>> = {
  component: <%= componentName %>,
}
export default meta

export const Default: <%= componentName %>Story = {}

export const Coloring: <%= componentName %>Story = {
  args: {
    color: "blue",
  },
}
