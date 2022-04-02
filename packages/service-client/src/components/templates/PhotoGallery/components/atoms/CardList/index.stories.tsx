import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { DeviceMap } from "../../../../../../shared/const/DeviceMap"
import { getEmptyArray } from "../../../../../../shared/utils/getEmptyArray"
import { CardList } from "./index"

type CardListType = typeof CardList
type CardListStory = ComponentStoryObj<CardListType>
type CardListProps = ComponentProps<CardListType>

const getCardInfo = (cardInfoNumber = 1): CardListProps["cards"] =>
  getEmptyArray(cardInfoNumber).map((_, index) => {
    const month = Math.floor(index % 12)
    const day = Math.floor(index % 28)
    return {
      imagePath: `http://placehold.jp/3d4070/ffffff/2000x1000.png?text=Image${index}`,
      location: {
        locationId: String(index),
        locationName: `Location ${index}`,
      },
      takenAt: {
        yearMonth: `2022-${month}`,
        viewTakenAt: `2022/${month}/${day}`,
      },
      tags: getEmptyArray(index).map((_2, index2) => ({
        tagId: `tag${index2}`,
        tagName: `tag${index2}`,
      })),
    }
  })

const meta: Meta<CardListProps> = {
  args: {
    cards: getCardInfo(20),
  },
  component: CardList,
}
export default meta

export const PcNotHovered: CardListStory = {}
export const PcHovered: CardListStory = {
  parameters: {
    pseudo: { hover: true },
  },
}

const Device = "ipad"
export const Tablet: CardListStory = {
  parameters: {
    viewport: {
      defaultViewport: Device,
    },
    screenshot: {
      viewport: DeviceMap[Device],
    },
  },
}
