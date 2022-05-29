import type { Location, Tag, TakenAt } from "../common"

/**
 * @description Home の Card
 * @property imagePath {string} strapi から渡される画像パス
 * @property location {Location}
 * @property tags {Tags[]}
 * @property takenAt {TakenAt}
 */
export type Card = {
  imagePath: string
  location: Location
  tags: Tag[]
  takenAt: TakenAt
}

/**
 * @description GET: /api/home のレスポンスボディ
 * @property cards {Card[]}
 */
export type ResponseBody = {
  cards: Card[]
}
