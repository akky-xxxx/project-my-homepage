import { FC } from "react"
import { Carousel } from "react-responsive-carousel"
import styled from "styled-components"

import { MediaQuery } from "../../../../../../shared/const/MediaQuery"
import { renderIndicator } from "./modules/renderIndicator"

type MainVisualProps = {
  mainVisualPaths: string[]
}

export const MainVisual: FC<MainVisualProps> = (props) => {
  const { mainVisualPaths } = props

  return (
    <Carousel
      showThumbs={false}
      showArrows={false}
      infiniteLoop
      animationHandler="fade"
      autoPlay
      showStatus={false}
      renderIndicator={renderIndicator}
    >
      {mainVisualPaths.map((mainVisualPath) => (
        <div key={mainVisualPath}>
          {/* TODO: サーバに乗せる時に要確認 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <StyledImage src={mainVisualPath} alt="" />
        </div>
      ))}
    </Carousel>
  )
}

const StyledImage = styled.img`
  width: auto !important;

  ${MediaQuery.Pc} {
    max-height: calc(100vh - 90px);
  }

  ${MediaQuery.Tb} {
    max-height: calc(100vh - 110px);
  }
`
