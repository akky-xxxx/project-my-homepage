import { MainVisual } from "./index"

import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"

type MainVisualType = typeof MainVisual
type MainVisualStory = ComponentStoryObj<MainVisualType>

const meta: Meta<ComponentProps<MainVisualType>> = {
  args: {
    mainVisualPaths: [
      "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=image1",
      "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=image2",
      "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=image3",
      "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=image4",
      "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=image5",
      "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=image6",
    ],
  },
  component: MainVisual,
}
export default meta

export const Default: MainVisualStory = {}
