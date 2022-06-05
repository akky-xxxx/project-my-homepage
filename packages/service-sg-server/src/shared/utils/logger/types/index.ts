import type { UnknownObject } from "common-types"

export type Message = UnknownObject | string
export type LoggerFormat = {
  version: string
  traceId: string
  message: Message
}
export type LoggerInfo = Pick<LoggerFormat, "message" | "traceId">
export type Logger = (loggerInfo: LoggerInfo) => void
