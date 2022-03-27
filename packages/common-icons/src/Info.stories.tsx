import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { Info } from "../dist"

type InfoType = typeof Info
type InfoStory = ComponentStoryObj<InfoType>

const meta: Meta<ComponentProps<InfoType>> = {
  component: Info,
}
export default meta

export const Default: InfoStory = {}
