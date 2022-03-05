---
to: <%= path %>/index.tsx
---
<% if (isOnlyStyle) { -%>
import styled from "styled-components"

export const <%= componentName %> = styled.div``
<% } else { -%>
import { <%= componentType %> } from "react"

export const <%= componentName %>: <%= componentType %> = () => <<%= componentName %> />
<% } -%>
