import { apiHandler } from "../../utils/apiHandler"
import { infoLogger, loggerWrapper } from "../../utils/logger"

// TODO: 仮定義なので除外しておく
/* eslint-disable sort-keys */
// TODO: common-types を作って移動する
export type Location = {
  locationId: string
  locationName: string
}

// TODO: common-types を作って移動する
export type Tag = {
  tagId: string
  tagName: string
}

// TODO: common-types を作って移動する
export type TakenAt = {
  yearMonth: string
  viewTakenAt: string
}

type Card = {
  imagePath: string
  location: Location
  tags: Tag[]
  takenAt: TakenAt
}

type ResponseBody = {
  cards: Card[]
}

const cards: Card[] = [
  {
    imagePath: "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=image1",
    location: {
      locationId: "01",
      locationName: "北海道",
    },
    tags: [],
    takenAt: {
      yearMonth: "2022-01",
      viewTakenAt: "2022/01/03",
    },
  },
  {
    imagePath: "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=image2",
    location: {
      locationId: "02",
      locationName: "青森",
    },
    tags: [
      {
        tagId: "01",
        tagName: "tag1",
      },
    ],
    takenAt: {
      yearMonth: "2022-02",
      viewTakenAt: "2022/02/03",
    },
  },
]
/* eslint-enable sort-keys */

// TODO: 非同期処理を入れたら消す
// eslint-disable-next-line @typescript-eslint/require-await
const photoGalleryGetBase = async () => {
  // TODO: trace id を設定したら定義場所を変更
  const infoLoggerMain = loggerWrapper(infoLogger, { traceId: "-" })

  // TODO: strapi からデータを取得する
  const response: ResponseBody = { cards }
  infoLoggerMain({
    endpoint: "GET: api/home",
    response,
  })

  return response
}

export const photoGalleryGet = apiHandler(photoGalleryGetBase)
