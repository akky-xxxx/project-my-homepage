import { composeStories } from "@storybook/testing-react"
import { render, screen } from "@testing-library/react"
import * as stories from "./index.stories"

const { MenuClosed, MenuOpened } = composeStories(stories)

describe("Layout component", () => {
  it("MenuClosed", () => {
    render(<MenuClosed />)
    expect(() => screen.getByText("Home")).toThrow()
    expect(() => screen.getByText("Photo Gallery")).toThrow()
  })

  it("MenuOpened", () => {
    render(<MenuOpened />)
    expect(screen.getByText("Home")).toBeTruthy()
    expect(screen.getByText("Photo Gallery")).toBeTruthy()
  })
})
