import { omit } from "remeda"

import { useHasHover } from "../../../../../../shared/utils/useHasHover"
import { Item } from "../../../../../atoms/Item"
import { ItemsWrapper } from "../../../../../atoms/ItemsWrapper"

import type { ComponentProps, FC } from "react"

type ImageProps = Omit<
  ComponentProps<typeof Item>,
  "handleClickImage" | "hasHover" | "subTitle" | "title"
> & {
  imageId: string
  locationName: string
  takenAt: string
}

type ItemsProps = {
  images: ImageProps[]
}

export const Items: FC<ItemsProps> = (props) => {
  const { images } = props
  const hasHover = useHasHover()

  return (
    <ItemsWrapper>
      {images.map((imageInfo) => {
        const { imageId, locationName, takenAt } = imageInfo
        const itemProps = omit(imageInfo, ["imageId"])
        return (
          <Item
            key={imageId}
            {...itemProps}
            hasHover={hasHover}
            title={locationName}
            subTitle={takenAt}
          />
        )
      })}
    </ItemsWrapper>
  )
}
