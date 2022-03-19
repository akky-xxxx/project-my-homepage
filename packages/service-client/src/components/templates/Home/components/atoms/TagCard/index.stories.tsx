import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { TagCard } from "."

type TagCardType = typeof TagCard

const meta: Meta<ComponentProps<TagCardType>> = {
  args: {
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
  component: TagCard,
}
export default meta

export const Default: ComponentStoryObj<TagCardType> = {}
