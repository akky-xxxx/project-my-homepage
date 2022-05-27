import { composeStories } from "@storybook/testing-react"
import { render, screen } from "@testing-library/react"

import * as stories from "./index.stories"

const { MenuOpened, MenuClosed } = composeStories(stories)

describe("SpMenu component", () => {
  it("MenuOpened はテキストが表示されていること", () => {
    render(<MenuOpened />)
    expect(screen.getByText("リンクテキスト1")).toBeVisible()
    expect(screen.getByText("サブメニュー1")).toBeVisible()
    expect(screen.getByText("サブメニュー2")).toBeVisible()
    expect(screen.getByText("リンクテキスト2")).toBeVisible()
    expect(screen.getByText("リンクテキスト3")).toBeVisible()
  })

  it("MenuClosed はテキストが表示されていないこと", () => {
    render(<MenuClosed />)
    expect(screen.getByText("リンクテキスト1")).not.toBeVisible()
    expect(screen.getByText("サブメニュー1")).not.toBeVisible()
    expect(screen.getByText("サブメニュー2")).not.toBeVisible()
    expect(screen.getByText("リンクテキスト2")).not.toBeVisible()
    expect(screen.getByText("リンクテキスト3")).not.toBeVisible()
  })
})
