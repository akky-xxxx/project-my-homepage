import next from "next"
// node_modules を除き最初に import させるため
// organize-imports-ignore
import "./modules/initialize"
import { IsDevelopment } from "../shared/const/common"
import { getServer } from "./modules/getServer"
import { errorLogger, loggerWrapper, sillyLogger } from "./utils/logger"

const DefaultPort = 3000
const Port = Number(process.env.NEXT_PUBLIC_PORT) || DefaultPort
const app = next({ dev: IsDevelopment, dir: "./" })
const handler = app.getRequestHandler()

const errorLoggerMain = loggerWrapper(errorLogger, { traceId: "-" })
// TODO: trace id を設定したら定義場所を変更
const sillyLoggerMain = loggerWrapper(sillyLogger, { traceId: "-" })

app
  .prepare()
  .then(() => {
    const server = getServer(handler)

    server.listen(Port, () => {
      if (IsDevelopment) {
        sillyLoggerMain(`> Ready on http://localhost:${Port}`)
      }
    })
  })
  .catch((error: unknown) => {
    errorLoggerMain(JSON.stringify(error))
  })
