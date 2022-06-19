import { omit } from "remeda"

import { useHasHover } from "../../../../../../shared/utils/useHasHover"
import { Item } from "../../../../../atoms/Item"
import { ItemsWrapper } from "../../../../../atoms/ItemsWrapper"

import type { ReactNode, ComponentProps, FC } from "react"

type ImageProps = Omit<
  ComponentProps<typeof Item>,
  "handleClickImage" | "hasHover" | "subTitle" | "title"
> & {
  imageNum: string
  locationId: string
  locationName: ReactNode
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
        const { imageNum, locationId, locationName } = imageInfo
        const itemProps = omit(imageInfo, ["locationId"])
        return (
          <Item
            key={locationId}
            {...itemProps}
            hasHover={hasHover}
            title={locationName}
            subTitle={imageNum}
          />
        )
      })}
    </ItemsWrapper>
  )
}
