type TooltipFormatter = (value: string) => [string, string]

export const tooltipFormatter: TooltipFormatter = (value) => [
  `${value} 枚`,
  "枚数",
]
