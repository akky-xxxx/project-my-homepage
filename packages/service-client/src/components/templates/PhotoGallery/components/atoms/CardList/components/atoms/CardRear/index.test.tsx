import { composeStories } from "@storybook/testing-react"
import { render, screen } from "@testing-library/react"
import * as stories from "./index.stories"

const { PcTagNone, PcTagMany, TabletTagNone, TabletTagMany } =
  composeStories(stories)

describe("CardRear component", () => {
  it("PcTagNone pattern", () => {
    render(<PcTagNone />)
    expect(screen.getByText("Details")).toBeVisible()
    expect(screen.getByText("Location At")).toBeVisible()
    expect(screen.getByText("Taken At")).toBeVisible()
    expect(screen.queryByText("Tags")).toBeFalsy()
  })

  it("PcTagMany pattern", () => {
    render(<PcTagMany />)
    expect(screen.getByText("Details")).toBeVisible()
    expect(screen.getByText("Location At")).toBeVisible()
    expect(screen.getByText("Taken At")).toBeVisible()
    expect(screen.getByText("Tags")).toBeVisible()
    expect(
      screen.queryByText("北海道")?.parentElement?.getAttribute("href"),
    ).toBe("/photo-gallery/location/01")
    expect(
      screen.queryByText("2022/01/01")?.parentElement?.getAttribute("href"),
    ).toBe("/photo-gallery/year-month/2022-01")
    expect(
      screen.queryByText("tag10")?.parentElement?.getAttribute("href"),
    ).toBe("/photo-gallery/tag/9")
  })

  it("TabletTagNone pattern", () => {
    render(<TabletTagNone />)
    expect(screen.getByText("Details")).toBeVisible()
    expect(screen.getByText("Location At")).toBeVisible()
    expect(screen.getByText("Taken At")).toBeVisible()
    expect(screen.queryByText("Tags")).toBeFalsy()
  })

  it("TabletTagMany pattern", () => {
    render(<TabletTagMany />)
    expect(screen.getByText("Details")).toBeVisible()
    expect(screen.getByText("Location At")).toBeVisible()
    expect(screen.getByText("Taken At")).toBeVisible()
    expect(screen.getByText("Tags")).toBeVisible()
    expect(
      screen.queryByText("北海道")?.parentElement?.getAttribute("href"),
    ).toBe("/photo-gallery/location/01")
    expect(
      screen.queryByText("2022/01/01")?.parentElement?.getAttribute("href"),
    ).toBe("/photo-gallery/year-month/2022-01")
    expect(
      screen.queryByText("tag50")?.parentElement?.getAttribute("href"),
    ).toBe("/photo-gallery/tag/49")
  })
})
