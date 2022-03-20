import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { CardMain } from "./index"

type CardMainType = typeof CardMain

const meta: Meta<ComponentProps<CardMainType>> = {
  args: {
    prefName: "prefName",
    thumbnailPath: "https://placehold.jp/300x300.png",
  },
  component: CardMain,
}
export default meta

export const IsInViewing: ComponentStoryObj<CardMainType> = {
  args: {
    isInView: true,
  },
}

export const IsNotInViewing: ComponentStoryObj<CardMainType> = {
  args: {
    isInView: false,
  },
}
