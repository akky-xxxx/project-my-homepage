import { composeStories } from "@storybook/testing-react"
import { render, screen } from "@testing-library/react"

import * as stories from "./index.stories"

const { Default, OpenedSubMenu } = composeStories(stories)

describe("PcMainMenu component", () => {
  it("Default でメニューが表示されていること", () => {
    render(<Default />)
    expect(screen.getByText("リンクテキスト1")).toBeTruthy()
    expect(screen.getByText("リンクテキスト2")).toBeTruthy()
    expect(screen.getByText("リンクテキスト3")).toBeTruthy()
  })

  it("OpenedSubMenu でサブメニューが表示されていること", () => {
    render(<OpenedSubMenu />)
    expect(screen.getByText("サブメニュー1")).toBeTruthy()
    expect(screen.getByText("サブメニュー2")).toBeTruthy()
  })
})
