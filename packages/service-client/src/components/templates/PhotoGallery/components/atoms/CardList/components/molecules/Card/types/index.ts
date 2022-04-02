/**
 * @type HoCCardProps
 * @description 親から渡す props
 * @property imagePath - 画像パス
 */
export type HoCCardProps = {
  imagePath: string
}

/**
 * @type CardProps
 * @description stateless component ( Template ) に渡す props
 * @property handleHideDetail - 画面が小さい時に詳細を閉じる関数
 * @property handleShowDetail - 画面が小さい時に詳細を開く関数
 * @property imagePath - 画像パス
 * @property isShownDetail - 画面が小さい時に詳細が開いているか否か
 */
export type CardProps = {
  handleHideDetail: () => void
  handleShowDetail: () => void
  imagePath: string
  isShownDetail: boolean
}
