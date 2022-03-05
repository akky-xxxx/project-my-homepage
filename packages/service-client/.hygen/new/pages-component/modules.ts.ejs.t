---
to: "<%= hasHooks ? `${path}/modules/use${templateName}Page/index.ts` : null %>"
---
export const use<%= templateName %>Page = () => {
  return {}
}
