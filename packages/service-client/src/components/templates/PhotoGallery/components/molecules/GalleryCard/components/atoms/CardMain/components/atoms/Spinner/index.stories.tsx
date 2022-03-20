import { ComponentStoryObj, Meta } from "@storybook/react"
import { Spinner } from "./index"

type SpinnerType = typeof Spinner

const meta: Meta = {
  component: Spinner,
}
export default meta

export const Default: ComponentStoryObj<SpinnerType> = {}
