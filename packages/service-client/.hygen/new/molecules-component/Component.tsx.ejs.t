---
to: <%= path %>/index.tsx
---
import { <%= componentType %> } from "react"
import { use<%= componentName %> } from "./modules/use<%= componentName %>"
import { Template } from "./Template"
import { HoC<%= componentName %>Props } from "./types"

<% if (hasChildren) { -%>
export const <%= componentName %>: FC<HoC<%= componentName %>Props> = (props) => {
  const { children } = props
  const dependencies = use<%= componentName %>(props)
  return (
    <Template {...dependencies}>
      {children}
    </Template>
  )
}
<% } else { -%>
export const <%= componentName %>: VFC<HoC<%= componentName %>Props> = (props) => {
  const dependencies = use<%= componentName %>(props)
  return <Template {...dependencies} />
}
<% } -%>
