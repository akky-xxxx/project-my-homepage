---
to: <%= path %>/modules/use<%= componentName %>/index.test.ts
---
import { act, renderHook, RenderHookResult } from "@testing-library/react-hooks"
import { use<%= componentName %> } from "."

describe("use<%= componentName %>", () => {
  let renderHookResult: RenderHookResult<
      undefined,
      ReturnType<typeof use<%= componentName %>>
    >

  beforeEach(() => {
      renderHookResult = renderHook(() => use<%= componentName %>())
    })

  it("dummy", () => {
    expect(use<%= componentName %>({ test1: 1 })).toEqual({ test2: "1" })
  })
})
