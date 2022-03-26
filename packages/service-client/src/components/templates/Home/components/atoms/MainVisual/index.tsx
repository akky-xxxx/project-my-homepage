import { VFC } from "react"
import { Carousel } from "react-responsive-carousel"
import { renderIndicator } from "./modules/renderIndicator"

type MainVisualProps = {
  mainVisualPaths: string[]
}

export const MainVisual: VFC<MainVisualProps> = (props) => {
  const { mainVisualPaths } = props

  return (
    <Carousel
      showThumbs={false}
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
          <img src={mainVisualPath} alt="" />
        </div>
      ))}
    </Carousel>
  )
}
