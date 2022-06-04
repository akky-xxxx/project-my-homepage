/**
 * @remarks
 * 場所情報
 *
 * @param locationId - ユニークID
 * @param locationName - 地名
 */
export type Location = {
  locationId: string
  locationName: string
}

/**
 * @remarks
 * タグ情報
 *
 * @param tagId - ユニークID
 * @param tagName - タグ名
 */
export type Tag = {
  tagId: string
  tagName: string
}

/**
 * @remarks
 * 撮影日情報
 *
 * @param yearMonth - YYYY-MM
 * @param viewTakenAt - YYYY/MM/D
 */
export type TakenAt = {
  yearMonth: string
  viewTakenAt: string
}
