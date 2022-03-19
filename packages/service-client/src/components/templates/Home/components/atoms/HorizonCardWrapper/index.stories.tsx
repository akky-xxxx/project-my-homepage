import { ComponentStoryObj, Meta } from "@storybook/react"
import { HorizonCardWrapper } from "."

type HorizonCardWrapperType = typeof HorizonCardWrapper

const meta: Meta = {
  args: {
    children: <div>子 component</div>,
  },
  component: HorizonCardWrapper,
}
export default meta

export const Default: ComponentStoryObj<HorizonCardWrapperType> = {}
