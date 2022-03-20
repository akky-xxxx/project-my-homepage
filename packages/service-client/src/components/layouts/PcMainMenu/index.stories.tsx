import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"
import { Template } from "./Template"

type PcMainMenuType = typeof Template
type PcMainMenuStory = ComponentStoryObj<PcMainMenuType>

const meta: Meta<ComponentProps<PcMainMenuType>> = {
  args: {
    currentPagePosition: 1,
    markerPosition: 0,
    menuData: [
      {
        href: "/href",
        linkText: "リンクテキスト1",
      },
      {
        href: "https://www.google.com/",
        linkText: "リンクテキスト2",
      },
      {
        href: "https://www.google.com/",
        linkText: "リンクテキスト3",
      },
    ],
  },
  component: Template,
}
export default meta

export const Default: PcMainMenuStory = {}

export const ThirdHovered: PcMainMenuStory = {
  args: {
    currentPagePosition: 2,
  },
}
