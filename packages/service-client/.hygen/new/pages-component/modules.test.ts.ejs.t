---
to: "<%= hasHooks ? `${path}/modules/use${templateName}Page/index.test.ts` : null %>"
---
<% if (hasHooks) { -%>
import { use<%= templateName %>Page } from "."
<% } -%>

describe("use<%= templateName %>Page", () => {
  it("dummy", () => {
    expect(use<%= templateName %>Page()).toEqual(1)
  })
})
