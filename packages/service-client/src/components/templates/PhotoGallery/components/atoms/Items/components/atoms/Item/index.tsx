import { Fragment, ReactNode, VFC } from "react"
import styled from "styled-components"
import { Margins } from "../../../../../../../../../shared/const/Margins"
import { MediaQuery } from "../../../../../../../../../shared/const/MediaQuery"
import { VoidFunction } from "../../../../../../../../../shared/types/react"

const { Margin4 } = Margins

type ItemProps = Record<"height" | "width", number> & {
  hasHover: boolean
  imagePath: string
  title: ReactNode
  handleClickImage: VoidFunction
  subTitle?: ReactNode
}

const thumbnailHeight = 180

export const Item: VFC<ItemProps> = (props) => {
  const {
    handleClickImage,
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
        {/* TODO: サーバに乗せる時に要確認 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <StyledImage
          src={imagePath}
          width={width}
          height={height}
          alt=""
          onClick={handleClickImage}
        />
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

  ${MediaQuery.Hover} {
    & {
      transition: opacity 0.3s;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`

const Paragraph = styled.p`
  margin-top: ${Margin4}px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
