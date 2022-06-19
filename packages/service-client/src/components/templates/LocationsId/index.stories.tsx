import { DeviceMap } from "../../../shared/const/DeviceMap"
import { LocationsIdTemplate } from "./index"

import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"

type LocationsIdType = typeof LocationsIdTemplate
type LocationsIdStory = ComponentStoryObj<LocationsIdType>

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
}) => ComponentProps<LocationsIdType>["images"][number]
const getImageProperty: GetImageProperty = (getImagePropertyArguments) => {
  const { hasHover, height, width } = getImagePropertyArguments
  const imageId = counterMain()
  return {
    handleClickImage: () => {
      console.count(`handleClickImage${imageId}`)
    },
    height,
    hasHover,
    imageId,
    imagePath: `http://placehold.jp/3d4070/ffffff/${width}x${height}.png?text=image${imageId}`,
    takenAt: "撮影日",
    locationName: "撮影場所",
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

const meta: Meta<ComponentProps<LocationsIdType>> = {
  component: LocationsIdTemplate,
}
export default meta

export const DefaultHasHover: LocationsIdStory = {
  args: {
    images: SizesHasHover.map(getImageProperty),
  },
}

const Device = "ipad" // TODO: 共通化する
export const DefaultNotHasHover: LocationsIdStory = {
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
