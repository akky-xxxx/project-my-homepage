---
to: "<%= hasHooks ? `${path}/modules/use${templateName}Page/index.test.ts` : null %>"
---
import { act, renderHook, RenderHookResult } from "@testing-library/react-hooks"
import { use<%= templateName %>Page } from "."

describe("use<%= templateName %>Page", () => {
  let renderHookResult: RenderHookResult<
        undefined,
        ReturnType<typeof use<%= templateName %>Page>
      >

  beforeEach(() => {
    renderHookResult = renderHook(() => use<%= templateName %>Page())
  })

  it("dummy", () => {
    expect(use<%= templateName %>Page()).toEqual(1)
  })
})
