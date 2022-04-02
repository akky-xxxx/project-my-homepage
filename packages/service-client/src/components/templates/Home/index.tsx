import { ComponentProps, VFC } from "react"
import { MainVisual } from "./components/atoms/MainVisual"

type HomeTemplateProps = ComponentProps<typeof MainVisual>

export const HomeTemplate: VFC<HomeTemplateProps> = (props) => {
  const { mainVisualPaths } = props
  return <MainVisual mainVisualPaths={mainVisualPaths} />
}
