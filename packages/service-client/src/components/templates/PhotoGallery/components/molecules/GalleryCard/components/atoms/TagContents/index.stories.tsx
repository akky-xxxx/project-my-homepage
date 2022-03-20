import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { TagContents } from "./index"

type TagContentsType = typeof TagContents

const meta: Meta<ComponentProps<TagContentsType>> = {
  args: {
    tags: ["タグ1", "タグ2", "タグ3"],
  },
  component: TagContents,
}
export default meta

export const NotHasSelected: ComponentStoryObj<TagContentsType> = {
  args: {
    selectedViewTags: [],
  },
}

export const HasSelected: ComponentStoryObj<TagContentsType> = {
  args: {
    selectedViewTags: ["タグ1", "タグ3"],
  },
}

export const NotHasTag: ComponentStoryObj<TagContentsType> = {
  args: {
    tags: [],
  },
}
