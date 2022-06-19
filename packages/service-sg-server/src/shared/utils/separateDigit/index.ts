type Option = Partial<{
  prefix: string
  suffix: string
}>

type SeparateDigit = (base: number, option?: Option) => string

export const separateDigit: SeparateDigit = (base, option) => {
  const prefix = option?.prefix || ""
  const suffix = option?.suffix || ""
  return [
    prefix,
    String(base).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
    suffix,
  ]
    .filter(Boolean)
    .join("")
}
