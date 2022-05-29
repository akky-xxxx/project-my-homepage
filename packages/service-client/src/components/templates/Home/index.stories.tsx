import { HomeTemplate } from "."

import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"

type HomeType = typeof HomeTemplate
type HomeStory = ComponentStoryObj<HomeType>

const meta: Meta<ComponentProps<HomeType>> = {
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
  component: HomeTemplate,
}
export default meta

export const Default: HomeStory = {}
