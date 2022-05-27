import { UnknownObject } from "common-types"

import { AppInfo } from "./const"
import { originLogger } from "./modules/originLogger"

type Message = UnknownObject | string
type LoggerFormat = {
  version: string
  traceId: string
  message: Message
}
type LoggerInfo = Pick<LoggerFormat, "message" | "traceId">
type Logger = (loggerInfo: LoggerInfo) => void

export const errorLogger: Logger = (loggerInfo) => {
  const log: LoggerFormat = {
    ...loggerInfo,
    ...AppInfo,
  }
  originLogger.error(log)
}

export const warnLogger: Logger = (loggerInfo) => {
  const log: LoggerFormat = {
    ...loggerInfo,
    ...AppInfo,
  }
  originLogger.warn(log)
}

export const infoLogger: Logger = (loggerInfo) => {
  const log: LoggerFormat = {
    ...loggerInfo,
    ...AppInfo,
  }
  originLogger.info(log)
}

export const debugLogger: Logger = (loggerInfo) => {
  const log: LoggerFormat = {
    ...loggerInfo,
    ...AppInfo,
  }
  originLogger.debug(log)
}

export const sillyLogger: Logger = (loggerInfo) => {
  const log: LoggerFormat = {
    ...loggerInfo,
    ...AppInfo,
  }
  originLogger.silly(log)
}

type LoggerWrapper = (
  logger: Logger,
  wrapperArguments: Pick<LoggerInfo, "traceId">,
) => (message: Message) => void

export const loggerWrapper: LoggerWrapper =
  (logger, wrapperArguments) => (message) => {
    logger({
      ...wrapperArguments,
      message,
    })
  }
