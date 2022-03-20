import { ComponentProps } from "react"
import { InViewHookResponse } from "react-intersection-observer"
import { CardMain } from "../components/atoms/CardMain"
import { TagContents } from "../components/atoms/TagContents"

type CardMainProps = ComponentProps<typeof CardMain>
type TagContentsProps = ComponentProps<typeof TagContents>

/**
 * @type HoCGalleryCardProps
 * @description 親から渡す props
 * @property takenAt - 撮影日
 */
export type HoCGalleryCardProps = Omit<CardMainProps, "isInView"> &
  TagContentsProps & {
    takenAt: string
  }

/**
 * @type GalleryCardProps
 * @description stateless component ( Template ) に渡す props
 * @property ref - isInView の対象となる要素
 * @property takenAt - 撮影日
 */
export type GalleryCardProps = CardMainProps &
  TagContentsProps & {
    // 回避策がないため
    // eslint-disable-next-line no-magic-numbers
    ref: InViewHookResponse[0]
    takenAt: string
  }
