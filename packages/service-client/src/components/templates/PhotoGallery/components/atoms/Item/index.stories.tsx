import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { DeviceMap } from "../../../../../../shared/const/DeviceMap"
import { Item } from "./index"

type ItemType = typeof Item
type ItemStory = ComponentStoryObj<ItemType>

const RepeatCount = 30
const Device = "ipad" // TODO: 共通化する

const meta: Meta<ComponentProps<ItemType>> = {
  component: Item,
  args: {
    hasHover: true,
    subTitle: (() => <span>{"sub title text. ".repeat(RepeatCount)}</span>)(),
    title: (() => <a href="#">{"title text. ".repeat(RepeatCount)}</a>)(),
  },
}
export default meta

export const HorizontalHasHover: ItemStory = {
  args: {
    height: 1000,
    imagePath:
      "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=Horizontal",
    width: 2000,
  },
}

export const VerticalHasHover: ItemStory = {
  args: {
    height: 2000,
    imagePath: "http://placehold.jp/3d4070/ffffff/1000x2000.png?text=Vertical",
    width: 1000,
  },
}

export const HorizontalNotHasHover: ItemStory = {
  args: {
    hasHover: false,
    height: 1000,
    imagePath:
      "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=Horizontal",
    width: 2000,
  },
  parameters: {
    viewport: {
      defaultViewport: Device,
    },
    screenshot: {
      viewport: DeviceMap[Device],
    },
  },
}

export const VerticalNotHasHover: ItemStory = {
  args: {
    hasHover: false,
    height: 2000,
    imagePath: "http://placehold.jp/3d4070/ffffff/1000x2000.png?text=Vertical",
    width: 1000,
  },
  parameters: {
    viewport: {
      defaultViewport: Device,
    },
    screenshot: {
      viewport: DeviceMap[Device],
    },
  },
}
