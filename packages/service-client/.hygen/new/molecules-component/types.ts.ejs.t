---
to: <%= path %>/types/index.ts
---
/**
 * @type HoC<%= componentName %>Props
 * @description 親から渡す props
 * @property test1 - about property
 */
export type HoC<%= componentName %>Props = {
  test1: number
}

/**
 * @type <%= componentName %>Props
 * @description stateless component ( Template ) に渡す props
 * @property test2 - about property
 */
export type <%= componentName %>Props = {
  test2: string
}
