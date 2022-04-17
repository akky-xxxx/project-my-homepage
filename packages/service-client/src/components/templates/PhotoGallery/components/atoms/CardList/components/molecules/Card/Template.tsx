import { FcWithChildren } from "../../../../../../../../../shared/types/react"
import { CardMain } from "./components/atoms/CardMain"
import { CloseIcon } from "./components/atoms/CloseIcon"
import { ImageWrapper } from "./components/atoms/ImageWrapper"
import { InfoIcon } from "./components/atoms/InfoIcon"
import { StyledFigcaption } from "./components/atoms/StyledFigcaption"
import { StyledFigure } from "./components/atoms/StyledFigure"
import { StyledImage } from "./components/atoms/StyledImage"
import { Classes } from "./const/Classes"
import { CardProps } from "./types"

const { IsShownDetail } = Classes

export const Template: FcWithChildren<CardProps> = (props) => {
  const {
    children,
    handleHideDetail,
    handleShowDetail,
    imagePath,
    isShownDetail,
  } = props

  return (
    <CardMain className={isShownDetail ? IsShownDetail : ""}>
      <StyledFigure>
        {!isShownDetail && <InfoIcon onClickIcon={handleShowDetail} />}
        {/* TODO: サーバに乗せる時に要確認 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <ImageWrapper>
          <StyledImage src={imagePath} alt="" />
        </ImageWrapper>
        <StyledFigcaption>
          <CloseIcon onClickIcon={handleHideDetail} />
          {children}
        </StyledFigcaption>
      </StyledFigure>
    </CardMain>
  )
}
