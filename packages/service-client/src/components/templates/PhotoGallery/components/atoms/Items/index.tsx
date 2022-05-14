import { ComponentProps, VFC } from "react"
import { omit } from "remeda"
import styled from "styled-components"
import { Common } from "../../../../../../shared/const/Common"
import { Margins } from "../../../../../../shared/const/Margins"
import { MediaQuery } from "../../../../../../shared/const/MediaQuery"
import { Item } from "../Item"

const { Margin8, Margin16 } = Margins
const { HasHover } = Common

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

export const Items: VFC<ItemsProps> = (props) => {
  const { images } = props

  return (
    <ItemsWrapper>
      {images.map((imageInfo) => {
        const { imageId, locationName, takenAt } = imageInfo
        const handleClickImage = () => {
          // TODO: モーダル実装時にいじる
          // eslint-disable-next-line no-console
          console.log({ imageId })
        }
        const itemProps = omit(imageInfo, ["imageId"])
        return (
          <ItemWrapper key={imageId}>
            <Item
              {...itemProps}
              hasHover={HasHover}
              handleClickImage={handleClickImage}
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
    grid-template-columns: repeat(4, calc(25% - calc(${Margin16}px * 3 / 4)));
    gap: ${Margin16}px;
  }

  ${MediaQuery.Tb} {
    grid-template-columns: repeat(2, calc(50% - calc(${Margin8}px * 3 / 4)));
    gap: ${Margin8}px;
  }
`

const ItemWrapper = styled.div`
  display: block;
`
