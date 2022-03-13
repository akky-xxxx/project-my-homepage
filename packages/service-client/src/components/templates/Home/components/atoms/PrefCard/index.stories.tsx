import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { PrefCard } from "."

type PrefCardType = typeof PrefCard

const meta: Meta<ComponentProps<PrefCardType>> = {
  args: {
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
  },
  component: PrefCard,
}
export default meta

export const Default: ComponentStoryObj<PrefCardType> = {}
