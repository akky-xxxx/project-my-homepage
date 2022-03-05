---
to: <%= path %>/modules/use<%= componentName %>/index.test.ts
---
import { use<%= componentName %> } from "."

describe("use<%= componentName %>", () => {
  it("dummy", () => {
    expect(use<%= componentName %>({ test1: 1 })).toEqual({ test2: "1" })
  })
})
