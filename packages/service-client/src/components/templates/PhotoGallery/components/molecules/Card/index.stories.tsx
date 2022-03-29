import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { DeviceMap } from "../../../../../../shared/const/DeviceMap"
import { Template } from "./Template"

type CardType = typeof Template
type CardStory = ComponentStoryObj<CardType>

const meta: Meta<ComponentProps<CardType>> = {
  args: {
    imagePath: "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=Card",
    isShownDetail: false,
    children: (() => <div>背面要素</div>)(),
  },
  component: Template,
}
export default meta

export const PcFrontFace: CardStory = {}

export const PcRearFace: CardStory = {
  parameters: {
    pseudo: { hover: true },
  },
}

const Device = "ipad"
export const TabletFrontFace: CardStory = {
  parameters: {
    viewport: {
      defaultViewport: Device,
    },
    screenshot: {
      viewport: DeviceMap[Device],
    },
  },
}

export const TabletRearFace: CardStory = {
  args: {
    isShownDetail: true,
  },
  parameters: {
    ...TabletFrontFace.parameters,
  },
}
