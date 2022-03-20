type IsExternal = (href: string) => boolean

export const isExternal: IsExternal = (href) =>
  href.startsWith("http://") || href.startsWith("https://")
