import { format } from "winston"

const { printf } = format

// eslint-disable-next-line no-magic-numbers
type DevelopmentFormatter = Parameters<typeof printf>[0]

export const developmentFormatter: DevelopmentFormatter = (info) => {
  const { level, message, timestamp } = info

  return [
    `${level}:`,
    // message は object の可能性もありえるが、型でそう定義されてない
    typeof message === "string" ? message : JSON.stringify(message),
    "@",
    typeof timestamp === "string" && `@${timestamp}`,
  ]
    .filter(Boolean)
    .join(" ")
}
