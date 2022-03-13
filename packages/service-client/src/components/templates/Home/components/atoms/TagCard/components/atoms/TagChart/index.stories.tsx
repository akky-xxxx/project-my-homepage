import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { TagChart } from "."

type TagChartType = typeof TagChart

const Wrapper = (props: ComponentProps<TagChartType>) => (
  <div style={{ height: "300px", width: "300px" }}>
    <TagChart {...props} />
  </div>
)

const meta: Meta<ComponentProps<TagChartType>> = {
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
  component: Wrapper,
}
export default meta

export const Default: ComponentStoryObj<TagChartType> = {}
