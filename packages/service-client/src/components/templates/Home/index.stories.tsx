import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { HomeTemplate } from "./Template"

type HomeType = typeof HomeTemplate

const meta: Meta<ComponentProps<HomeType>> = {
  args: {
    galleryInfoList: [
      { date: "2018-10-01" },
      { date: "2018-10-02" },
      { date: "2018-10-03" },
      { date: "2018-10-04" },
      { date: "2018-10-05" },
      { date: "2019-01-01" },
      { date: "2019-02-01" },
      { date: "2019-02-02" },
      { date: "2019-03-01" },
      { date: "2019-03-02" },
      { date: "2019-03-03" },
    ],
    prefData: [
      {
        prefCount: 1,
        prefId: "01",
        prefName: "北海道",
      },
      {
        prefCount: 2,
        prefId: "02",
        prefName: "青森県",
      },
      {
        prefCount: 3,
        prefId: "03",
        prefName: "岩手県",
      },
      {
        prefCount: 4,
        prefId: "04",
        prefName: "宮城県",
      },
    ],
    startMonth: 10,
    tagData: [
      {
        tagCount: 1,
        tagId: "01",
        tagName: "tagA",
      },
      {
        tagCount: 2,
        tagId: "02",
        tagName: "tagB",
      },
      {
        tagCount: 3,
        tagId: "03",
        tagName: "tagC",
      },
      {
        tagCount: 4,
        tagId: "04",
        tagName: "tagD",
      },
    ],
  },
  component: HomeTemplate,
}
export default meta

export const Default: ComponentStoryObj<HomeType> = {}
