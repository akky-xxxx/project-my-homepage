import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { Template } from "./Template"

type GalleryCardType = typeof Template
type GalleryCardStory = ComponentStoryObj<GalleryCardType>

const meta: Meta<ComponentProps<GalleryCardType>> = {
  args: {
    isInView: true,
    prefName: "prefName",
    selectedViewTags: ["タグ1", "タグ3"],
    tags: ["タグ1", "タグ2", "タグ3"],
    takenAt: "2022年1月1日",
    thumbnailPath: "https://placehold.jp/300x300.png",
  },
  component: Template,
}
export default meta

export const IsInViewWithTags: GalleryCardStory = {}

export const IsNotInViewWithTags: GalleryCardStory = {
  args: {
    isInView: false,
  },
}

export const IsInView: GalleryCardStory = {
  args: {
    tags: [],
  },
}

export const IsNotInView: GalleryCardStory = {
  args: {
    isInView: false,
    tags: [],
  },
}
