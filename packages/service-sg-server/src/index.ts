// node_modules を除き最初に import させるため
// organize-imports-ignore
import "./modules/initialize"
import { IsDevelopment } from "./shared/const/common"
import { getServer } from "./modules/getServer"
import { loggerWrapper, sillyLogger } from "./shared/utils/logger"

const DefaultPort = 5000
const Port = Number(process.env.PORT) || DefaultPort

// TODO: trace id を設定したら定義場所を変更
const sillyLoggerMain = loggerWrapper(sillyLogger, { traceId: "-" })

const server = getServer()

server.listen(Port, () => {
  if (IsDevelopment) {
    sillyLoggerMain(`> Ready on http://localhost:${Port}`)
  }
})
