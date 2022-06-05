import { IsDevelopment } from "../../const/common"
import { AppInfo } from "./const"
import { getFormatMessage } from "./modules/getFormatMessage"
import { originLogger } from "./modules/originLogger"

import type { Logger, LoggerFormat, LoggerInfo, Message } from "./types"

export const errorLogger: Logger = (loggerInfo) => {
  const log: LoggerFormat = {
    ...loggerInfo,
    ...AppInfo,
    message: getFormatMessage(loggerInfo.message, IsDevelopment),
  }
  originLogger.error(log)
}

export const warnLogger: Logger = (loggerInfo) => {
  const log: LoggerFormat = {
    ...loggerInfo,
    ...AppInfo,
    message: getFormatMessage(loggerInfo.message, IsDevelopment),
  }
  originLogger.warn(log)
}

export const infoLogger: Logger = (loggerInfo) => {
  const log: LoggerFormat = {
    ...loggerInfo,
    ...AppInfo,
    message: getFormatMessage(loggerInfo.message, IsDevelopment),
  }
  originLogger.info(log)
}

export const debugLogger: Logger = (loggerInfo) => {
  const log: LoggerFormat = {
    ...loggerInfo,
    ...AppInfo,
    message: getFormatMessage(loggerInfo.message, IsDevelopment),
  }
  originLogger.debug(log)
}

export const sillyLogger: Logger = (loggerInfo) => {
  const log: LoggerFormat = {
    ...loggerInfo,
    ...AppInfo,
    message: getFormatMessage(loggerInfo.message, IsDevelopment),
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
