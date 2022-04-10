/**
 * @description 場所情報
 * @property locationId {string} - ユニーク
 * @property locationName {string} - 地名
 */
export type Location = {
  locationId: string
  locationName: string
}

/**
 * @description タグ情報
 * @property tagId {string} - ユニーク
 * @property tagName {string} - タグ名
 */
export type Tag = {
  tagId: string
  tagName: string
}

/**
 * @description 撮影日情報
 * @property yearMonth {string} - YYYY-MM
 * @property viewTakenAt {string} - YYYY/MM/D
 */
export type TakenAt = {
  yearMonth: string
  viewTakenAt: string
}
