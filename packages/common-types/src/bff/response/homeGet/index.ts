import type { Location, Tag, TakenAt } from "../common"

/**
 * @remarks
 * Home の Card
 *
 * @param imagePath - strapi から渡される画像パス
 * @param location - Location
 * @param tags - Tags[]
 * @param takenAt - TakenAt
 */
export type Card = {
  imagePath: string
  location: Location
  tags: Tag[]
  takenAt: TakenAt
}

/**
 * @remarks
 * GET: /api/home のレスポンスボディ
 *
 * @param cards - Card[]
 */
export type ResponseBody = {
  cards: Card[]
}
