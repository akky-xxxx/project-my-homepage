import { apiHandler } from "../../utils/apiHandler"
// import { isErrorStatus } from "../../utils/isErrorStatus"
import { infoLogger, loggerWrapper } from "../../utils/logger"

type ResponseBody = {
  mainVisualPaths: string[]
}

// TODO: 非同期処理を入れたら消す
// eslint-disable-next-line @typescript-eslint/require-await
const homeGetBase = async () => {
  // TODO: trace id を設定したら定義場所を変更
  const infoLoggerMain = loggerWrapper(infoLogger, { traceId: "-" })

  // TODO: strapi からデータを取得する
  const response: ResponseBody = {
    mainVisualPaths: [
      "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=image1",
      "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=image2",
      "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=image3",
      "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=image4",
      "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=image5",
      "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=image6",
    ],
  }
  infoLoggerMain({
    endpoint: "GET: api/home",
    response,
  })

  return response
}

export const homeGet = apiHandler(homeGetBase)
