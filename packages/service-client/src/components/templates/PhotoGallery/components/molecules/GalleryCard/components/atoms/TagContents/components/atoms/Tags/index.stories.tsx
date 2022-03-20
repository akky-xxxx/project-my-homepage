import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { Tags } from "./index"

type TagsType = typeof Tags

const meta: Meta<ComponentProps<TagsType>> = {
  args: {
    tags: ["タグ1", "タグ2", "タグ3"],
  },
  component: Tags,
}
export default meta

export const NotHasSelected: ComponentStoryObj<TagsType> = {
  args: {
    selectedViewTags: [],
  },
}

export const HasSelected: ComponentStoryObj<TagsType> = {
  args: {
    selectedViewTags: ["タグ1", "タグ3"],
  },
}
