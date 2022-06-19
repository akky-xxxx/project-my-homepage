import { Fragment } from "react"
import Zoom from "react-medium-image-zoom"
import styled from "styled-components"

import { Margins } from "../../../../../../../../../shared/const/Margins"

import type { ReactNode, FC } from "react"

const { Margin4 } = Margins

type ItemProps = Record<"height" | "width", number> & {
  hasHover: boolean
  imagePath: string
  title: ReactNode
  subTitle?: ReactNode
}

const thumbnailHeight = 180

export const Item: FC<ItemProps> = (props) => {
  const {
    hasHover,
    height,
    imagePath,
    title,
    subTitle,
    width,
  } = props

  return (
    <StyledDiv>
      <ImageWrapper>
        <Zoom>
          {/* TODO: サーバに乗せる時に要確認 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <StyledImage
            src={imagePath}
            width={width}
            height={height}
            alt=""
          />
        </Zoom>
      </ImageWrapper>
      {hasHover && (
        <Fragment>
          <Paragraph>{title}</Paragraph>
          {subTitle && <Paragraph>{subTitle}</Paragraph>}
        </Fragment>
      )}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: inline-block;
  min-width: ${thumbnailHeight}px;
  width: 100%;
`

const ImageWrapper = styled.div`
  align-content: center;
  display: flex;
  justify-content: center;
`

const StyledImage = styled.img`
  height: ${thumbnailHeight}px;
  object-fit: contain;
`

const Paragraph = styled.p`
  margin-top: ${Margin4}px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
