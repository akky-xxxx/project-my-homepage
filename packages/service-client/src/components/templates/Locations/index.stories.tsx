import { DeviceMap } from "../../../shared/const/DeviceMap"
import { LocationsTemplate } from "./index"

import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"

type PhotoGalleryType = typeof LocationsTemplate
type PhotoGalleryStory = ComponentStoryObj<PhotoGalleryType>

const counter = () => {
  let count = 0
  return () => {
    count += 1
    return count.toString()
  }
}
const counterMain = counter()

type GetImageProperty = (getImagePropertyArguments: {
  width: number
  height: number
  hasHover: boolean
}) => ComponentProps<PhotoGalleryType>["images"][number]
const getImageProperty: GetImageProperty = (getImagePropertyArguments) => {
  const { hasHover, height, width } = getImagePropertyArguments
  const locationId = counterMain()
  return {
    handleClickImage: () => {
      console.count(`handleClickImage${locationId}`)
    },
    height,
    hasHover,
    locationId,
    locationName: "撮影場所",
    imageNum: `${locationId} 枚`,
    imagePath: `http://placehold.jp/3d4070/ffffff/${width}x${height}.png?text=image${locationId}`,
    width,
  }
}

const SizesHasHover = [
  { hasHover: true, height: 1000, width: 2000 },
  { hasHover: true, height: 2000, width: 1000 },
  { hasHover: true, height: 500, width: 1500 },
  { hasHover: true, height: 1500, width: 500 },
  { hasHover: true, height: 1500, width: 1500 },
  { hasHover: true, height: 100, width: 100 },
] as const

const SizesNotHasHover = [
  { hasHover: false, height: 1000, width: 2000 },
  { hasHover: false, height: 2000, width: 1000 },
  { hasHover: false, height: 500, width: 1500 },
  { hasHover: false, height: 1500, width: 500 },
  { hasHover: false, height: 1500, width: 1500 },
  { hasHover: false, height: 100, width: 100 },
] as const

const meta: Meta<ComponentProps<PhotoGalleryType>> = {
  component: LocationsTemplate,
}
export default meta

export const DefaultHasHover: PhotoGalleryStory = {
  args: {
    images: SizesHasHover.map(getImageProperty),
  },
}

const Device = "ipad" // TODO: 共通化する
export const DefaultNotHasHover: PhotoGalleryStory = {
  args: {
    images: SizesNotHasHover.map(getImageProperty),
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
