import { DeviceMap } from "../../../shared/const/DeviceMap"
import { Layout } from "./index"

import type { ComponentStoryObj, Meta } from "@storybook/react"
import type { ComponentProps } from "react"

type LayoutType = typeof Layout
type LayoutStory = ComponentStoryObj<LayoutType>

const meta: Meta<ComponentProps<LayoutType>> = {
  args: {
    children: "子要素",
    currentPagePosition: 0,
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
  component: Layout,
}
export default meta

export const Pc: LayoutStory = {}

const Device = "ipad"
export const Tablet: LayoutStory = {
  parameters: {
    viewport: {
      defaultViewport: Device,
    },
    screenshot: {
      viewport: DeviceMap[Device],
    },
  },
}
