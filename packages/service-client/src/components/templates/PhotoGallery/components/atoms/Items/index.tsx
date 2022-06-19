import { omit } from "remeda"
import styled from "styled-components"

import { Margins } from "../../../../../../shared/const/Margins"
import { MediaQuery } from "../../../../../../shared/const/MediaQuery"
import { useHasHover } from "../../../../../../shared/utils/useHasHover"
import { Item } from "../../../../../atoms/Item"

import type { ComponentProps, FC } from "react"

const { Margin8, Margin16 } = Margins

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
          <ItemWrapper key={imageId}>
            <Item
              {...itemProps}
              hasHover={hasHover}
              title={locationName}
              subTitle={takenAt}
            />
          </ItemWrapper>
        )
      })}
    </ItemsWrapper>
  )
}

const ItemsWrapper = styled.div`
  display: grid;

  ${MediaQuery.Pc} {
    /* TODO: chrome 等が対応したらコメントを消す */
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    grid-template-columns: repeat(4, calc(25% - calc(${Margin16}px * 3 / 4)));
    gap: ${Margin16}px;
  }

  ${MediaQuery.Tb} {
    /* TODO: chrome 等が対応したらコメントを消す */
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    grid-template-columns: repeat(2, calc(50% - calc(${Margin8}px * 3 / 4)));
    gap: ${Margin8}px;
  }
`

const ItemWrapper = styled.div`
  display: block;
`
