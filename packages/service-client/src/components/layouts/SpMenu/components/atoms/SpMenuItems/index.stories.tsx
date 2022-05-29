import { SpMenuItems } from "./index"

import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"

type SpMenuItemsType = typeof SpMenuItems
type SpMenuItemsStory = ComponentStoryObj<SpMenuItemsType>

const meta: Meta<ComponentProps<SpMenuItemsType>> = {
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
  component: SpMenuItems,
  parameters: {
    backgrounds: {
      default: "blue",
    },
  },
}
export default meta

export const Opened: SpMenuItemsStory = {
  args: {
    isOpened: true,
  },
}

export const Closed: SpMenuItemsStory = {
  args: {
    isOpened: false,
  },
}
