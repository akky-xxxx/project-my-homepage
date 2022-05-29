import { MainVisual } from "./components/atoms/MainVisual"

import type { ComponentProps, FC } from "react"

type HomeTemplateProps = ComponentProps<typeof MainVisual>

export const HomeTemplate: FC<HomeTemplateProps> = (props) => {
  const { mainVisualPaths } = props
  return <MainVisual mainVisualPaths={mainVisualPaths} />
}
