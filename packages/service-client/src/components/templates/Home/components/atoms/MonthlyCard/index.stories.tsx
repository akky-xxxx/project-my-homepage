import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { MonthlyCard } from "."

type MonthlyCardType = typeof MonthlyCard

const meta: Meta<ComponentProps<MonthlyCardType>> = {
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
    startMonth: 10,
  },
  component: MonthlyCard,
}
export default meta

export const Default: ComponentStoryObj<MonthlyCardType> = {}
