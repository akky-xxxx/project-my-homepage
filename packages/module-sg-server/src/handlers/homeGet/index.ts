import { Photos } from "common-types"
import { apiHandler } from "../../shared/utils/apiHandler"
import { isErrorStatus } from "../../shared/utils/isErrorStatus"
import { infoLogger, loggerWrapper } from "../../shared/utils/logger"
import { strapiApiClient } from "../../shared/utils/strapiApiClient"
import { Query } from "./const"
import { getMainVisualPath } from "./modules/getMainVisualPath"

type ResponseBody = {
  mainVisualPaths: string[]
}

const homeGetBase = async () => {
  const {
    data: { data },
    status,
  } = await strapiApiClient.get<Photos>(`/photos?${Query}`)

  if (isErrorStatus(status)) {
    throw new Error(`status: ${status}`)
  }

  const mainVisualPaths = data.map(getMainVisualPath)
  const infoLoggerMain = loggerWrapper(infoLogger, { traceId: "-" })

  const response: ResponseBody = {
    mainVisualPaths,
  }
  infoLoggerMain({
    endpoint: "GET: /api/home",
    response,
  })

  return response
}

export const homeGet = apiHandler(homeGetBase)
