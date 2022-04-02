import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { PhotoGalleryTemplate } from "."
import { getEmptyArray } from "../../../shared/utils/getEmptyArray"

type PhotoGalleryType = typeof PhotoGalleryTemplate
type PhotoGalleryStory = ComponentStoryObj<PhotoGalleryType>
type PhotoGalleryProps = ComponentProps<PhotoGalleryType>

const getCardInfo = (cardInfoNumber = 1): PhotoGalleryProps["cards"] =>
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

const meta: Meta<PhotoGalleryProps> = {
  args: {
    cards: getCardInfo(30),
  },
  component: PhotoGalleryTemplate,
}
export default meta

export const Default: PhotoGalleryStory = {}
