import { ComponentStoryObj, Meta } from "@storybook/react"
import { ComponentProps } from "react"

import { Template } from "./Template"

type SpMenuType = typeof Template
type SpMenuStory = ComponentStoryObj<SpMenuType>

const meta: Meta<ComponentProps<SpMenuType>> = {
  args: {
    menu: [
      {
        href: "/href",
        linkText: "リンクテキスト1",
        subMenu: [
          {
            href: "/?1",
            linkText: "サブメニュー1",
          },
          {
            href: "/?2",
            linkText: "サブメニュー2",
          },
        ],
      },
      {
        href: "https://www.google.com/?1",
        linkText: "リンクテキスト2",
      },
      {
        href: "https://www.google.com/?2",
        linkText: "リンクテキスト3",
      },
    ],
  },
  component: Template,
}
export default meta

export const MenuOpened: SpMenuStory = {
  args: {
    isOpenedMenu: true,
  },
}
export const MenuClosed: SpMenuStory = {
  args: {
    isOpenedMenu: false,
  },
}
