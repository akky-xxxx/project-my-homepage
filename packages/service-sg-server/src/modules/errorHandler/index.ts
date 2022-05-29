import { errorLogger, loggerWrapper } from "../../shared/utils/logger"

import type { ErrorRequestHandler } from "express"

// TODO: trace id を設定したら定義場所を変更
const errorLoggerMain = loggerWrapper(errorLogger, { traceId: "-" })

export const errorHandler: ErrorRequestHandler = (error, _req, _res, next) => {
  errorLoggerMain(JSON.stringify(error))
  next()
}
