---
to: <%= path %>/Template.tsx
---
import { <%= componentType %> } from "react"
import { <%= componentName %>Props } from "./types"

<% if (hasChildren) { -%>
export const Template: FC<<%= componentName %>Props> = (props) => {
  const { children, test2 } = props
  return (
    <div>
      <div>{test2}</div>
      <div>{children}</div>
    </div>
  )
}
<% } else { -%>
export const Template: VFC<<%= componentName %>Props> = (props) => {
  const { test2 } = props
  return (
    <div>
      {test2}
    </div>
  )
}
<% } -%>