import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { DeviceMap } from "../../../../../../shared/const/DeviceMap"
import { getEmptyArray } from "../../../../../../shared/utils/getEmptyArray"
import { CardRear } from "./index"

type CardRearType = typeof CardRear
type CardRearStory = ComponentStoryObj<CardRearType>

const getTags = (arrayNumber = 1): ComponentProps<CardRearType>["tags"] =>
  getEmptyArray(arrayNumber).map((_, index) => ({
    tagId: String(index),
    tagName: `tag${index + 1}`,
  }))

const meta: Meta<ComponentProps<CardRearType>> = {
  args: {
    location: {
      locationId: "01",
      locationName: "北海道",
    },
    takenAt: {
      yearMonth: "2022-01",
      viewTakenAt: "2022/01/01",
    },
  },
  component: CardRear,
}
export default meta

export const PcTagNone: CardRearStory = {
  args: {
    tags: [],
  },
}

export const PcTagOne: CardRearStory = {
  args: {
    tags: getTags(),
  },
}

export const PcTagMany: CardRearStory = {
  args: {
    tags: getTags(50),
  },
}

const Device = "ipad"
export const TabletTagNone: CardRearStory = {
  args: {
    tags: [],
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

export const TabletTagOne: CardRearStory = {
  ...TabletTagNone,
  args: {
    tags: getTags(),
  },
}

export const TabletTagMany: CardRearStory = {
  ...TabletTagNone,
  args: {
    tags: getTags(50),
  },
}
