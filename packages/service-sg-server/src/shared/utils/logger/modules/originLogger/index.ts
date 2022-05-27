import { createLogger, format, transports } from "winston"

import { IsDevelopment } from "../../../../const/common"
import { developmentFormatter } from "./modules/developmentFormatter"
import { flattenInfo } from "./modules/flattenInfo"

const { printf, json, combine, timestamp, prettyPrint, colorize } = format
const { Console } = transports
const developmentFormat = printf(developmentFormatter)
const productionFormat = json()

const formats = [
  // 日時フォーマットのため typo check 除外
  /* cspell:disable-next-line */
  timestamp({ format: "YYYY-MM-DDTHH:mm:ss.SSSZ" }),
  prettyPrint(),
  flattenInfo(),
]

if (IsDevelopment) formats.push(colorize({ all: IsDevelopment }))
formats.push(IsDevelopment ? developmentFormat : productionFormat)

export const originLogger = createLogger({
  format: combine(...formats),
  level: process.env.LOG_LEVEL || "silly",
  transports: [new Console()],
})
