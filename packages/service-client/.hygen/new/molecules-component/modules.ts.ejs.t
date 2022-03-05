---
to: <%= path %>/modules/use<%= componentName %>/index.ts
---
import { HoC<%= componentName %>Props, <%= componentName %>Props } from "../../types"

type Use<%= componentName %> = (args: HoC<%= componentName %>Props) => <%= componentName %>Props

export const use<%= componentName %>: Use<%= componentName %> = (args) => {
  const { test1 } = args
  return { test2: String(test1) }
}
