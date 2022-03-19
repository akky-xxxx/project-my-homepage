import { ComponentStoryObj, Meta } from "@storybook/react"
import { PageAbove } from "."

type PageAboveType = typeof PageAbove

const meta: Meta = {
  args: {
    title: "タイトルテキスト",
  },
  component: PageAbove,
}
export default meta

export const Default: ComponentStoryObj<PageAboveType> = {}
