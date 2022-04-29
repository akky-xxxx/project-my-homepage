import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { Info } from "./index"

type InfoType = typeof Info
type InfoStory = ComponentStoryObj<InfoType>

const meta: Meta<ComponentProps<InfoType>> = {
  component: Info,
}
export default meta

export const Default: InfoStory = {}

export const Coloring: InfoStory = {
  args: {
    color: "blue",
  },
}
